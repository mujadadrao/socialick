import * as actionTypes from '../actions/actionTypes';


const initialState = {
    users: [],
    loading: false,
    error: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_FETCH_USERS:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.users,
            }
    }
}
