import axios from "../../api"
import { put, takeLatest } from 'redux-saga/effects'
import { DELETE_BY_ID_TASK_FAILURE, DELETE_BY_ID_TASK_REQUEST, DELETE_BY_ID_TASK_SUCCESS, GET_ALL_TASK_FAILURE, GET_ALL_TASK_REQUEST, GET_ALL_TASK_SUCCESS, POST_TASK_FAILURE, POST_TASK_REQUEST, POST_TASK_SUCCESS } from "../../constants/task/taskConstant"

function* postTaskSaga(action) {
    
    let model = action.model
    let method = 'POST'
    let url = '/task'

    let result = yield axios({
        url: url,
        method: method,
        data: model,
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(data => {
        return {
            type: POST_TASK_SUCCESS,
            data: data
        }
    })
    .catch(e => {
        return {
            type: POST_TASK_FAILURE,
            error: e
        }
    })

    yield put(result)
}

function* getAllTaskSaga(action) {
    let result = yield axios.get('/task', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(data => {
        return ({
            type: GET_ALL_TASK_SUCCESS,
            data: data.list
        })
    })
    .catch(e => {
        return ({
            type: GET_ALL_TASK_FAILURE,
            error: e
        })
    })

    yield put(result);
}

function* deleteByIdTaskSaga(action) {
    let result = yield axios.delete(`/task/${action.id}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(data => {
            return {
                type: DELETE_BY_ID_TASK_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: DELETE_BY_ID_TASK_FAILURE,
                error: e
            }
        })
    yield put(result)
}

export function* watchPostTaskSaga() {
    yield takeLatest(POST_TASK_REQUEST, postTaskSaga)
}

export function* watchGetAllTaskSaga() {
    yield takeLatest(GET_ALL_TASK_REQUEST, getAllTaskSaga)
}

export function* watchDeleteByIdTaskSaga() {
    yield takeLatest(DELETE_BY_ID_TASK_REQUEST, deleteByIdTaskSaga)
}