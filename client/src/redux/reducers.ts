import { Action } from './actions'

const initialState = {
  preflightComplete: false,
  isLoggedIn: false
}

function rootReducer(state = initialState, action: Action) {
  switch(action.type){
  case 'LOG_OUT':
    return {
      ...state,
      isLoggedIn: false,
      user: {}
    }
  case 'INIT_USER':
    return {
      ...state,
      isLoggedIn: true,
      user: action.payload.data
    }
  case 'PREFLIGHT_FINISHED':
    return {
      ...state,
      preflightComplete: true
    }
  case 'UPDATE_USER':
    return {
      ...state,
      user: action.payload.data
    }
  default:
    return state
  }
}

export default rootReducer
