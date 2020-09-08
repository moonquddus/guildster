import { Action } from './actions'

interface ISkill {
  name: string
  damage: number
}

export interface ICharacter {
  _id: string
  name: string
  occupation: string
  portrait: number
  hp: number
  health: number
  strength: number
  magic: number
  agility: number
  dexterity: number
  luck: number
  stamina: number
  focus: number
  skills: ISkill[]
}

export interface IGuild {
  _id?: string
  name?: string
  gold?: number
  characters?: ICharacter[]
}

export interface IUser {
  _id: string
  name: string
  email: string
  guild: IGuild
}

export interface IState {
  preflightComplete: false
  isLoggedIn: boolean
  user: IUser
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
      case "UPDATE_USER":
        return {
          ...state,
          user: action.payload.data
        }
      default:
        return state
    }
}

export default rootReducer
