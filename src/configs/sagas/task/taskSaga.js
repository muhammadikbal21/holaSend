import axios from "../../api"
import { put, takeLatest } from 'redux-saga/effects'
import { DELETE_BY_ID_TASK_FAILURE, DELETE_BY_ID_TASK_REQUEST, DELETE_BY_ID_TASK_SUCCESS, GET_ALL_TASK_FAILURE, GET_ALL_TASK_REQUEST, GET_ALL_TASK_SUCCESS, POST_TASK_FAILURE, POST_TASK_REQUEST, POST_TASK_SUCCESS } from "../../constants/task/taskConstant"
import pagination from "../pagination";

function* postTaskSaga(action) {
    
    let model = action.model
    let method = 'POST'
    let url = '/task'

    let result = yield axios({
        url: url,
        method: method,
        data: model
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
    let parameter = pagination(action)

    if (action.search.status){
        if (parameter.length > 0) {
            parameter+="&"
        }
        parameter+=`status=${action.search.status}`
    }

    if (action.search.destinationId){
        if (parameter.length > 0) {
            parameter+="&"
        }
        parameter+=`destinationId=${action.search.destinationId}`
    }

    if (action.search.requestById){
        if (parameter.length > 0) {
            parameter+="&"
        }
        parameter+=`requestById=${action.search.requestById}`
    }

    if (action.search.priority){
        if (parameter.length > 0) {
            parameter+="&"
        }
        parameter+=`priority=${action.search.priority}`
    }

    if (action.search.before){
        if (parameter.length > 0) {
            parameter+="&"
        }
        parameter+=`before=${action.search.before}`
    }

    if (action.search.after){
        if (parameter.length > 0) {
            parameter+="&"
        }
        parameter+=`after=${action.search.after}`
    }

    parameter = parameter.replace(/\s+/g, '+')
    let result = yield axios.get(`/task?${parameter}`)
    .then(data => {
        return ({
            type: GET_ALL_TASK_SUCCESS,
            data: data.list,
            pagination: {
                size: data.size,
                total: data.total,
                page: data.page
            }
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
    let result = yield axios.delete(`/task/${action.id}`)
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