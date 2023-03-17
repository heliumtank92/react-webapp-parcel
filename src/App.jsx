import PropTypes from 'prop-types'
import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import getTheme from '@am92/react-design-system/Theme'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@am92/react-design-system/styles'
import { DsCssBaseline } from '@am92/react-design-system/Components'

import getAppRouter from '~/src/Configurations/getAppRouter'
import Loader from '~/src/Components/Loader'

import { getThemeReducer } from '~/src/Redux/Theme/Selectors'

import performHandshake from '~/src/Services/performHandshake'

class App extends Component {
  static propTypes = {
    theme: PropTypes.object
  }

  state = {
    hasError: false
  }

  componentDidMount () {
    this.initialize()
  }

  initialize = async () => {
    try {
      await performHandshake()
    } catch (error) {
      this.setState({ hasError: true })
    }
  }

  render () {
    const { persisted, theme } = this.props

    let children = <Loader />
    const AppTheme = getTheme()

    if (persisted) {
      const router = getAppRouter()
      children = <RouterProvider router={router} />
    }

    window.localStorage.setItem('mui-mode', theme.mode)

    return (
      <CssVarsProvider
        theme={AppTheme}
        defaultMode={theme.mode}
        modeStorageKey='mui-mode'
      >
        <DsCssBaseline enableColorScheme>
          <Suspense loading={<Loader />}>
            {children}
          </Suspense>
        </DsCssBaseline>
      </CssVarsProvider>
    )
  }
}

const mapStateToProps = (state) => {
  const theme = getThemeReducer(state)
  return {
    theme
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
