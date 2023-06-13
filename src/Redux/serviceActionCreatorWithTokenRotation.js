import { WebHttpError } from '@am92/web-http'

import loginWithRefreshTokenService from './Auth/Services/loginWithRefreshToken.Service'

const loginWithRefreshTokenServiceDispatcher = loginWithRefreshTokenService()

export default function serviceActionCreator(traceActions, service) {
  return data => {
    return async (dispatch, getState) => {
      if (traceActions.loading && typeof traceActions.loading === 'function') {
        dispatch(traceActions.loading())
      }

      const response = await service(data).catch(async error => {
        if (error.errorCode === 'User::TOKEN_EXPIRED') {
          return (
            (await retryWithTokenRotation) <
            RequestData >
            (traceActions, service, dispatch, getState, data)
          )
        } else {
          if (traceActions.error && typeof traceActions.error === 'function') {
            dispatch(traceActions.error({ ...error }))
          }
          return error
        }
      })

      if (traceActions.success && typeof traceActions.success === 'function') {
        dispatch(traceActions.success(response))
      }

      return response
    }
  }
}

async function retryWithTokenRotation(
  traceActions,
  service,
  dispatch,
  getState,
  data
) {
  const tokenRotationResponse = await loginWithRefreshTokenServiceDispatcher(
    dispatch,
    getState
  )

  if (tokenRotationResponse instanceof WebHttpError) {
    return tokenRotationResponse
  }

  const response = await service(data).catch(error => {
    if (traceActions.error && typeof traceActions.error === 'function') {
      dispatch(traceActions.error({ ...error }))
    }
    return error
  })

  if (traceActions.success && typeof traceActions.success === 'function') {
    dispatch(traceActions.success(response))
  }

  return response
}
