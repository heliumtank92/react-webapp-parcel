export default function ServiceTrackerReducer (state = {}, action = {}) {
  const { type } = action
  const typeParts = type.split('/')
  const endingPart = typeParts.pop()

  switch (endingPart) {
    case 'LOADING': {
      const key = typeParts.join('/')
      return { ...state, [key]: 'LOADING' }
    }
    case 'SUCCESS': {
      const key = typeParts.join('/')
      return { ...state, [key]: 'SUCCESS' }
    }
    case 'ERROR': {
      const key = typeParts.join('/')
      return { ...state, [key]: 'ERROR' }
    }
    default: {
      return state
    }
  }
}
