import {put, delay} from 'redux-saga/effects';
import axios from 'axios';
import * as authActions from "../actions/auth";

export function* authUserSaga(action) {
    yield put(authActions.authStart());
    let authUrl = 'https://reqres.in/api/login';
    const authData = {
        email: action.email,
        password: action.password,
    }
    if(action.isSignUp){
        authUrl = 'https://reqres.in/api/register';
    }
    try {
        const response = yield axios.post(authUrl, authData);
        const expireInMins = 60;
        yield localStorage.setItem('token', response.data.token);
        yield localStorage.setItem('expirationDate', yield new Date(new Date().getTime() + expireInMins * 60000));
        yield put(authActions.authSuccess(response.data.token));
        yield put(authActions.checkAuthTimeout(expireInMins));
    } catch(error) {
        yield put(authActions.authFailed());

    }
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationMins * 60000);
    yield put(authActions.authLogout());
}

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield put(authActions.authLogoutSuccess());
}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(authActions.authLogout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            yield put(authActions.authLogout());
        } else {
            yield put(authActions.authSuccess(token));
            console.log((expirationDate.getTime() - new Date().getTime()) / 60000);
            yield put(authActions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 60000));
        }
    }
}