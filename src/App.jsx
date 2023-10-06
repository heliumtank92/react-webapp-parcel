import PropTypes from 'prop-types'
import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import {
  getTheme,
  DsCssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider
} from '@am92/react-design-system'
// import { CONTEXT } from '@am92/web-http'

import Loader from '~/src/Components/Loader'

import {
  getAccessTokenSelector,
  getRefreshTokenSelector
} from './Redux/Auth/Selectors'

import getAppRouter from '~/src/Configurations/getAppRouter'
// import { asHttp } from '~/src/Configurations/WebHttp'

import performHandshake from '~/src/Services/performHandshake'

import {
  PALETTE,
  FONT_FAMILY,
  THEME_MODE_STORAGE_KEY,
  DEFAULT_THEME_MODE
} from '~/src/Constants/THEME'

class App extends Component {
  static propTypes = {
    theme: PropTypes.object
  }

  state = {
    hasError: false
  }

  // constructor (props) {
  // super(props)

  // If you dont want to respect user selected theme
  // and set default theme to one set in THEME constants then uncomment the line
  // this.resetUserThemeToDefault()
  // }

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

  resetUserThemeToDefault = () => {
    window.localStorage.removeItem(THEME_MODE_STORAGE_KEY)
  }

  render () {
    const {
      persisted
      // accessToken,
      // refreshToken
    } = this.props

    let children = <Loader />
    const AppTheme = getTheme(PALETTE, FONT_FAMILY)

    if (persisted) {
      const router = getAppRouter()
      children = <RouterProvider router={router} />

      // asHttp.context.set(CONTEXT.ACCESS_TOKEN, accessToken)
      // asHttp.context.set(CONTEXT.REFRESH_TOKEN, refreshToken)
    }

    return (
      <CssVarsProvider
        theme={AppTheme}
        defaultMode={DEFAULT_THEME_MODE}
        modeStorageKey={THEME_MODE_STORAGE_KEY}
      >
        <DsCssBaseline enableColorScheme>
          <Suspense loading={<Loader />}>{children}</Suspense>
        </DsCssBaseline>
      </CssVarsProvider>
    )
  }
}

const mapStateToProps = state => {
  const accessToken = getAccessTokenSelector(state)
  const refreshToken = getRefreshTokenSelector(state)

  return {
    accessToken,
    refreshToken
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
