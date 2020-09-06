import { Action } from './actions'

interface IGuild {
  name: string
  creator: IUser
}

interface IUser {
  name: string
  email: string
  guild?: IGuild
}

export interface IState {
  isLoggedIn: boolean
  user?: IUser
}

const initialState = {
  isLoggedIn: false
}

function rootReducer(state = initialState, action: Action) {
    switch(action.type){
        default:
            return state
    }
}

export default rootReducer