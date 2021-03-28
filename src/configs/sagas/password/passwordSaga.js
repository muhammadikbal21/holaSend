import axios from "axios"
import { FORGET_PASSWORD_FAILURE, FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_SUCCESS, RECOVER_PASSWORD_FAILURE, RECOVER_PASSWORD_REQUEST, RECOVER_PASSWORD_SUCCESS } from "../../constants/password/passwordConstant"
import { put, takeLatest } from 'redux-saga/effects'

function* forgetPasswordSaga(action) {
    let result = yield axios.get(`/forget-password/${action.username}`)
        .then(data => {
            return {
                type: FORGET_PASSWORD_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: FORGET_PASSWORD_FAILURE,
                error: e
            }
        })
    yield put(result)
}

function* recoverPasswordSaga(action) {
    let result = yield axios({
        url: `/user/reset-password/${action.token}`,
        method: 'PUT',
        data: action.password
    })
        .then(data => {
            return {
                type: RECOVER_PASSWORD_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: RECOVER_PASSWORD_FAILURE,
                error: e
            }
        })
    yield put(result)
}

export function* watchForgetPasswordSaga() {
    yield takeLatest(FORGET_PASSWORD_REQUEST, forgetPasswordSaga)
}

export function* watchRecoverPasswordSaga() {
    yield takeLatest(RECOVER_PASSWORD_REQUEST, recoverPasswordSaga)
}