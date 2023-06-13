import { createSelector } from '@reduxjs/toolkit'

export const SLICE_NAME = 'serviceTracker'

const select = state => state[SLICE_NAME]

export const getServiceSelector = (state, serviceKey) => {
  return createSelector(
    state => state[SLICE_NAME][serviceKey],
    serviceKeyValue => serviceKeyValue
  )(state)
}

export const isServiceLoading = (state, serviceKeys) => {
  const loading = serviceKeys.reduce((boolean, serviceKey) => {
    return boolean || getServiceSelector(state, serviceKey) === 'LOADING'
  }, false)

  return loading
}
