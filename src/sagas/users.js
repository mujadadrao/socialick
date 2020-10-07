import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as usersAction from '../actions/users';

export function* fetchUsersSaga() {
    yield put(usersAction.startFetchUsers());
    const usersURL = 'https://reqres.in/api/users';
    try {
        const response = yield axios.get(usersURL);
        yield put(usersAction.setUsers(response.data.data));
        yield put(usersAction.fetchUsersSuccess());
    } catch (error) {
        console.log('Error while fetching users: ', error);
        put(usersAction.fetchUsersFailed(error));
    }
}