import { createAction } from '@reduxjs/toolkit'

export default function traceActionsCreator(serviceName) {
  const loading = createAction(`${serviceName}/LOADING`)
  const success = createAction(`${serviceName}/SUCCESS`)
  const error = createAction(`${serviceName}/ERROR`)

  const traceActions = { loading, success, error }
  return traceActions
}
