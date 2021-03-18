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
            Authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxODY0MDExMCwiaWF0IjoxNjE2MDQ4MTEwfQ.3skYp3zuSECqyfyEekLa-G77CLbcJCrfRJhfj6rYF3XYOpjXXNurBE9RUfjptj0H0WucqdAk4GNeiEXdLs6kvw'
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