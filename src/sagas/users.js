import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as usersAction from '../actions/users';

export function* fetchUsersSaga(action) {
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

export function* addNewUserSaga(action) {
    yield put(usersAction.addNewUser({
        id: action.userData.userId,
        email: action.userData.email,
        first_name: action.userData.firstName,
        last_name: action.userData.lastName,
        avatar: action.userData.avatar,
    }));
}

export function* clearUsersSaga(action) {
    yield put(usersAction.clearUsers());
}
