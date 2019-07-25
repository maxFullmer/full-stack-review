import axios from 'axios';

const initalState = {
    user: null
}

const SET_USER = 'SET_USER';

export default function reducer(state = initalState, action) {
    switch(action.type){
        case SET_USER:
            return { user: action.payload }
        default:
            return state;
    }
}

// action builder/creator
export function setUser(user){
    return {
        payload: user,
        type: SET_USER
    }
}