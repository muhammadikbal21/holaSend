import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_ALL_DESTINATIONS_FAILURE, GET_ALL_DESTINATIONS_REQUEST, GET_ALL_DESTINATIONS_SUCCESS, POST_DESTINATIONS_FAILURE, POST_DESTINATIONS_REQUEST, POST_DESTINATIONS_SUCCESS } from "../../constants/destinations/destinationsConstant";

function* getAllDestinationsSaga(action) {
    let result = yield axios.get('/destinations/all', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(data => {
        return ({
            type: GET_ALL_DESTINATIONS_SUCCESS,
            data: data
        })
    })
    .catch(e => {
        return ({
            type: GET_ALL_DESTINATIONS_FAILURE,
            error: e
        })
    })

    yield put(result);
}

function* postDestinationsSaga(action) {
    
    let model = action.model
    let method = 'POST'
    let url = '/destinations'

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
            type: POST_DESTINATIONS_SUCCESS,
            data: data
        }
    })
    .catch(e => {
        return {
            type: POST_DESTINATIONS_FAILURE,
            error: e
        }
    })

    yield put(result)
}

export function* watchGetAllDestinationsSaga() {
    yield takeLatest(GET_ALL_DESTINATIONS_REQUEST, getAllDestinationsSaga)
}

export function* watchPostDestinationsSaga() {
    yield takeLatest(POST_DESTINATIONS_REQUEST, postDestinationsSaga)
}