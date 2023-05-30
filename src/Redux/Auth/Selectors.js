import { createSelector } from '@reduxjs/toolkit'

export const SLICE_NAME = 'auth'

const select = state => state[SLICE_NAME]
const isLoggedInSelect = state => state[SLICE_NAME].isLoggedIn
const accessTokenSelect = state => state[SLICE_NAME].accessToken
const refreshTokenSelect = state => state[SLICE_NAME].refreshToken

export const getIsLoggedInSelector = createSelector(
  isLoggedInSelect,
  isLoggedIn => isLoggedIn
)

export const getAccessTokenSelector = createSelector(
  accessTokenSelect,
  accessToken => accessToken
)

export const getRefreshTokenSelector = createSelector(
  refreshTokenSelect,
  refreshToken => refreshToken
)
