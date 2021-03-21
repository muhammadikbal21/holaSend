import axios from "axios";
import { GET_ALL_USER_FILTER_FAILURE, GET_ALL_USER_FILTER_REQUEST, GET_ALL_USER_FILTER_SUCCESS } from "../../constants/user/userConstant";
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

export function* watchGetAllUserFilterSaga() {
    yield takeLatest(GET_ALL_USER_FILTER_REQUEST, getAllUserFilterSaga)
}