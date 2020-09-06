import { Action } from './actions'

const initialState = {
}

function rootReducer(state = initialState, action: Action) {
    switch(action.type){
        default:
            return state
    }
}

export default rootReducer