import { Action } from './actions'

interface IGuild {
  name: string
  creator: IUser
}

export interface IUser {
  name: string
  email: string
  guild?: IGuild
}

export interface IState {
  preflightComplete: false,
  isLoggedIn: boolean
  user?: IUser
}

const initialState = {
  preflightComplete: false,
  isLoggedIn: true
}

function rootReducer(state = initialState, action: Action) {
    switch(action.type){
      case "LOG_OUT":
        return {
          ...state,
          isLoggedIn: false,
          user: {}
        }
      case "INIT_USER":
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload.data
        }
      case "PREFLIGHT_FINISHED":
        return {
          ...state,
          preflightComplete: true
        }
      default:
        return state
    }
}

export default rootReducer