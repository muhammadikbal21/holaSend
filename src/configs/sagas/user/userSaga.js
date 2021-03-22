import axios from "axios";
import { GET_ALL_USER_FAILURE, GET_ALL_USER_FILTER_FAILURE, GET_ALL_USER_FILTER_REQUEST, GET_ALL_USER_FILTER_SUCCESS, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, PUT_BY_USERNAME_MAKE_ADMIN_FAILURE, PUT_BY_USERNAME_MAKE_ADMIN_REQUEST, PUT_BY_USERNAME_MAKE_ADMIN_SUCCESS, PUT_BY_USERNAME_MAKE_COURIER_FAILURE, PUT_BY_USERNAME_MAKE_COURIER_REQUEST, PUT_BY_USERNAME_MAKE_COURIER_SUCCESS, PUT_BY_USERNAME_MAKE_DISABLED_REQUEST, PUT_BY_USERNAME_MAKE_DISABLED_SUCCESS, PUT_BY_USERNAME_MAKE_STAFF_FAILURE, PUT_BY_USERNAME_MAKE_STAFF_REQUEST, PUT_BY_USERNAME_MAKE_STAFF_SUCCESS } from "../../constants/user/userConstant";
import { put, takeLatest } from "@redux-saga/core/effects";

function* getAllUserFilterSaga(action) {
    let result = yield axios.get('/user/admin-or-staff', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(data => {
        return ({
            type: GET_ALL_USER_FILTER_SUCCESS,
            data: data
        })
    })
    .catch(e => {
        return ({
            type: GET_ALL_USER_FILTER_FAILURE,
            error: e
        })
    })

    yield put(result);
}

function* getAllUserSaga(action) {
    let result = yield axios.get('/user', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(data => {
        return ({
            type: GET_ALL_USER_SUCCESS,
            data: data.list
        })
    })
    .catch(e => {
        return ({
            type: GET_ALL_USER_FAILURE,
            error: e
        })
    })

    yield put(result);
}

function* putByUsernameMakeAdminSaga(action) {
    let result = yield axios.put(`/user/${action.username}/make-admin`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(data => {
            return {
                type: PUT_BY_USERNAME_MAKE_ADMIN_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: PUT_BY_USERNAME_MAKE_ADMIN_FAILURE,
                error: e
            }
        })
    yield put(result)
}

function* putByUsernameMakeStaffSaga(action) {
    let result = yield axios.put(`/user/${action.username}/make-staff`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(data => {
            return {
                type: PUT_BY_USERNAME_MAKE_STAFF_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: PUT_BY_USERNAME_MAKE_STAFF_FAILURE,
                error: e
            }
        })
    yield put(result)
}

function* putByUsernameMakeCourierSaga(action) {
    let result = yield axios.put(`/user/${action.username}/make-courier`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(data => {
            return {
                type: PUT_BY_USERNAME_MAKE_COURIER_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: PUT_BY_USERNAME_MAKE_COURIER_FAILURE,
                error: e
            }
        })
    yield put(result)
}

function* putByUsernameMakeDisabledSaga(action) {
    let result = yield axios.put(`/user/${action.username}/disable-user`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(data => {
            return {
                type: PUT_BY_USERNAME_MAKE_DISABLED_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: PUT_BY_USERNAME_MAKE_COURIER_FAILURE,
                error: e
            }
        })
    yield put(result)
}

export function* watchGetAllUserFilterSaga() {
    yield takeLatest(GET_ALL_USER_FILTER_REQUEST, getAllUserFilterSaga)
}

export function* watchGetAllUserSaga() {
    yield takeLatest(GET_ALL_USER_REQUEST, getAllUserSaga)
}

export function* watchPutByUsernameMakeAdminSaga() {
    yield takeLatest(PUT_BY_USERNAME_MAKE_ADMIN_REQUEST, putByUsernameMakeAdminSaga)
}

export function* watchPutByUsernameMakeStaffSaga() {
    yield takeLatest(PUT_BY_USERNAME_MAKE_STAFF_REQUEST, putByUsernameMakeStaffSaga)
}

export function* watchPutByUsernameMakeCourierSaga() {
    yield takeLatest(PUT_BY_USERNAME_MAKE_COURIER_REQUEST, putByUsernameMakeCourierSaga)
}

export function* watchPutByUsernameMakeDisabledSaga() {
    yield takeLatest(PUT_BY_USERNAME_MAKE_DISABLED_REQUEST, putByUsernameMakeDisabledSaga)
}