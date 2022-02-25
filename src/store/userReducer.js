import { SET_USER, UPDATE_USER, REMOVE_USER } from './actions'

const User={}

const userReducer=(state=User, action)=>{
    switch (action.type) {
        case SET_USER:
            return action.data
        case UPDATE_USER:
            return {...state, ...action.data}
        case REMOVE_USER:
            return {}
        default:
            return state
    }
}

export default userReducer