import React, { Component } from 'react'

export default class App extends Component {
  render () {
    console.log(process.env.APP_ENV_TITLE)
    return (
      <h1>Parcel React App</h1>
    )
  }
}
