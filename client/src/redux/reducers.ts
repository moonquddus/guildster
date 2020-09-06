import { Action } from './actions'

interface ISkill {
  name: string
  damage: number
}

interface ICharacter {
  name: string
  occupation: string
  health: number
  strength: number
  magic: number
  speed: number
  skills?: ISkill[]
}

interface IGuild {
  name: string
  characters?: ICharacter[]
}

export interface IUser {
  name: string
  email: string
  guild?: IGuild
}

export interface IState {
  preflightComplete: false
  isLoggedIn: boolean
  user?: IUser
}

const initialState = {
  preflightComplete: false,
  isLoggedIn: false
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
