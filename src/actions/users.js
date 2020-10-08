import * as actionTypes from './actionTypes';

export const fetchUsers = () => ({
    type: actionTypes.FETCH_USERS,
})

export const startFetchUsers = () => ({
    type: actionTypes.START_FETCH_USERS,
})

export const setUsers = (users) => ({
    type: actionTypes.SET_USERS,
    users,
})

export const fetchUsersSuccess = () => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
})

export const fetchUsersFailed = (error) => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    error,
})

export const addNewUserInit = (userData) => ({
    type: actionTypes.ADD_NEW_USER_INIT,
    userData,
})

export const addNewUser = (userData) => ({
    type: actionTypes.ADD_NEW_USER,
    userData,
})

export const clearUsersInit = () => ({
    type: actionTypes.CLEAR_USERS_INIT,
})

export const clearUsers = () => ({
    type: actionTypes.CLEAR_USERS,
})