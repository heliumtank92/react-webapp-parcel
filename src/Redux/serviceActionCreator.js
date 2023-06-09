export default function serviceActionCreator(actions, service) {
  return data => {
    return async (dispatch, getState) => {
      if (actions.loading && typeof actions.loading === 'function') {
        dispatch(actions.loading())
      }

      try {
        const response = await service(data)
        if (actions.success && typeof actions.success === 'function') {
          dispatch(actions.success(response))
        }
        return response
      } catch (error) {
        if (actions.error && typeof actions.error === 'function') {
          dispatch(actions.error(error))
        }
        return error
      }
    }
  }
}
