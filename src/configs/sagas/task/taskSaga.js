import axios from "../../api"
import { put, takeLatest } from 'redux-saga/effects'
import { POST_TASK_FAILURE, POST_TASK_REQUEST, POST_TASK_SUCCESS } from "../../constants/task/taskConstant"

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

export function* watchPostTaskSaga() {
    yield takeLatest(POST_TASK_REQUEST, postTaskSaga)
}