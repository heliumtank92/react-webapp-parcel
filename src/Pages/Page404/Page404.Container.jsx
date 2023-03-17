import React, { PureComponent } from 'react'
import { UNSAFE_DataRouterContext } from 'react-router-dom'
import Page404Wrapper from './Page404.Wrapper'

class Page404Container extends PureComponent {
  static contextType = UNSAFE_DataRouterContext
  render () {
    return (
      <Page404Wrapper />
    )
  }
}

export default Page404Container
