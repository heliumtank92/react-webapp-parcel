import React, { Component } from 'react'
import { DsBackdrop, DsCircularProgress } from '@am92/react-design-system/Components'

export default class Loader extends Component {
  render () {
    return (
      <DsBackdrop open>
        <DsCircularProgress />
      </DsBackdrop>
    )
  }
}
