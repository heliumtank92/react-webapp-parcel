import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAME } from './Selectors'

const INITIAL_STATE = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: ''
}

const sliceOptions = {
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {}
}

const slice = createSlice(sliceOptions)

export default slice.reducer
