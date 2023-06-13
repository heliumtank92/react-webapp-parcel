import { WebHttpError } from '@am92/web-http'

export default function serviceActionCreator(traceActions, service) {
  return data => {
    return async (dispatch, getState) => {
      if (traceActions.loading && typeof traceActions.loading === 'function') {
        dispatch(traceActions.loading())
      }

      const response = await service(data).catch(error => {
        if (traceActions.error && typeof traceActions.error === 'function') {
          dispatch(traceActions.error(error))
        }
        return error
      })

      if (traceActions.success && typeof traceActions.success === 'function') {
        dispatch(traceActions.success(response))
      }
      return response
    }
  }
}
