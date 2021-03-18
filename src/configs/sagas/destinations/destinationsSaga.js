import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_ALL_DESTINATIONS_FAILURE, GET_ALL_DESTINATIONS_REQUEST, GET_ALL_DESTINATIONS_SUCCESS } from "../../constants/destinations/destinationsConstant";

function* getAllDestinationsSaga(action) {
    
    let result = yield axios.get('/destinations', {
        headers: {
            Authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxODY0MDExMCwiaWF0IjoxNjE2MDQ4MTEwfQ.3skYp3zuSECqyfyEekLa-G77CLbcJCrfRJhfj6rYF3XYOpjXXNurBE9RUfjptj0H0WucqdAk4GNeiEXdLs6kvw'
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