import { all } from 'redux-saga/effects'
import { watchGetAllDestinationsSaga, watchPostDestinationsSaga } from './destinations/destinationsSaga';
import { watchLoginSaga } from "./login/loginSaga";
import { watchRegisterSaga } from './register/registerSaga';
import { watchGetAllTaskSaga, watchPostTaskSaga } from './task/taskSaga';

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchRegisterSaga(),
        watchGetAllDestinationsSaga(),
        watchPostTaskSaga(),
        watchPostDestinationsSaga(),
        watchGetAllTaskSaga()
    ])
}