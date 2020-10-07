import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    error: null,
    loading: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                token: action.token,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
            }
        default:
            return state;
    }
}

export default authReducer;