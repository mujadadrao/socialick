import * as actionTypes from './actionTypes';

export const authStart = () => ({
    type: actionTypes.AUTH_START,
})

export const authSuccess = (token) => ({
    type: actionTypes.AUTH_SUCCESS,
    token: token,
})

export const authFailed = (error) => ({
    type: actionTypes.AUTH_FAILED,
    error,
})

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_INIT_LOGOUT,
    }
}

export const authLogoutSuccess = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const checkAuthTimeout = (expirationMins) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationMins,
    }
}

export const authUser = (authData) => {
    return {
        type: actionTypes.AUTH_USER,
        email: authData.email,
        password: authData.password,
        isSignUp: authData.isSignUp,
    }
}


export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE,
    }
}