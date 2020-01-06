import { SET_ENGLISH, SET_EXPECTED, SET_OUTPUT } from './actions'

export const initState = {
  english: 'My firstname is Mario and my lastname is Gucci',
  expected:
    'My firstname is {word:firstname} and my lastname is {word:lastname}',
  output: '',
}

export const initAction = { type: 'UNKWOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_ENGLISH:
      return {
        ...state,
        english: action.payload.english,
      }
    case SET_EXPECTED:
      return {
        ...state,
        expected: action.payload.expected,
      }
    case SET_OUTPUT:
      return {
        ...state,
        output: action.payload.output,
      }
    default:
      return state
  }
}
