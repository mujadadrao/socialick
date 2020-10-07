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