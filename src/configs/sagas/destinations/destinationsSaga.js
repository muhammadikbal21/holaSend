import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { DELETE_BY_ID_DESTINATIONS_FAILURE, DELETE_BY_ID_DESTINATIONS_REQUEST, DELETE_BY_ID_DESTINATIONS_SUCCESS, GET_ALL_DESTINATIONS_FAILURE, GET_ALL_DESTINATIONS_FILTER_FAILURE, GET_ALL_DESTINATIONS_FILTER_REQUEST, GET_ALL_DESTINATIONS_FILTER_SUCCESS, GET_ALL_DESTINATIONS_REQUEST, GET_ALL_DESTINATIONS_SUCCESS, POST_DESTINATIONS_FAILURE, POST_DESTINATIONS_REQUEST, POST_DESTINATIONS_SUCCESS } from "../../constants/destinations/destinationsConstant";

function* getAllDestinationsFilterSaga(action) {
    let result = yield axios.get('/destinations/all')
    .then(data => {
        return ({
            type: GET_ALL_DESTINATIONS_FILTER_SUCCESS,
            data: data
        })
    })
    .catch(e => {
        return ({
            type: GET_ALL_DESTINATIONS_FILTER_FAILURE,
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
        data: model
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

function* getAllDestinationsSaga(action) {
    let result = yield axios.get('/destinations')
    .then(data => {
        return ({
            type: GET_ALL_DESTINATIONS_SUCCESS,
            data: data.list
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

function* deleteByIdDestinationsSaga(action) {
    let result = yield axios.delete(`/destinations/${action.id}`)
        .then(data => {
            return {
                type: DELETE_BY_ID_DESTINATIONS_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: DELETE_BY_ID_DESTINATIONS_FAILURE,
                error: e
            }
        })
    yield put(result)
}

export function* watchGetAllDestinationsFilterSaga() {
    yield takeLatest(GET_ALL_DESTINATIONS_FILTER_REQUEST, getAllDestinationsFilterSaga)
}

export function* watchPostDestinationsSaga() {
    yield takeLatest(POST_DESTINATIONS_REQUEST, postDestinationsSaga)
}

export function* watchGetAllDestinationsSaga() {
    yield takeLatest(GET_ALL_DESTINATIONS_REQUEST, getAllDestinationsSaga)
}

export function* watchDeleteByIdDestinationskSaga() {
    yield takeLatest(DELETE_BY_ID_DESTINATIONS_REQUEST, deleteByIdDestinationsSaga)
}