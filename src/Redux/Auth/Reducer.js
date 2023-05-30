import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAME } from './Selectors'

const INITIAL_STATE = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: ''
}

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  extraReducers: {}
})

export default slice.reducer
