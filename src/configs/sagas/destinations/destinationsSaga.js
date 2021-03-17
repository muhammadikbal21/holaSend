import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_ALL_DESTINATIONS_FAILURE, GET_ALL_DESTINATIONS_REQUEST, GET_ALL_DESTINATIONS_SUCCESS } from "../../constants/destinations/destinationsConstant";

function* getAllDestinationsSaga(action) {
    
    let result = yield axios.get('/destinations', {
        headers: {
            Authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxODU3MDgxNywiaWF0IjoxNjE1OTc4ODE3fQ.ASG-DuKHWkZn2W8W-GGHvBEqGLDClSxXPxBv0laglWN79Mj0czwtk0vCrJHHnqOKjtgowN1wRyzssWnIH6T51A'
        }
    })
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

export function* watchGetAllDestinationsSaga() {
    yield takeLatest(GET_ALL_DESTINATIONS_REQUEST, getAllDestinationsSaga)
}