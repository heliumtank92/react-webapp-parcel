import { createSelector } from '@reduxjs/toolkit'

export const SLICE_NAME = 'serviceTracker'

export const getServiceTrackerReducer = state => {
  return state[SLICE_NAME]
}

export const getServiceSelector = (state, serviceKey) => {
  return createSelector(
    (state) => state[SLICE_NAME][serviceKey],
    (serviceKeyValue) => serviceKeyValue
  )(state)
}

export const isServiceLoading = (state, serviceKeys) => {
  const loading = serviceKeys.reduce((boolean, serviceKey) => {
    return boolean && getServiceSelector(state, serviceKey)
  }, true)

  return loading
}
