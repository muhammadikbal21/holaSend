import { all } from 'redux-saga/effects'
import { watchGetAllDestinationsFilterSaga, watchPostDestinationsSaga } from './destinations/destinationsSaga';
import { watchLoginSaga } from "./login/loginSaga";
import { watchRegisterSaga } from './register/registerSaga';
import { watchDeleteByIdTaskSaga, watchGetAllTaskSaga, watchPostTaskSaga } from './task/taskSaga';
import { watchGetAllUserFilterSaga } from './user/userSaga';

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchRegisterSaga(),
        watchGetAllDestinationsFilterSaga(),
        watchPostTaskSaga(),
        watchPostDestinationsSaga(),
        watchGetAllTaskSaga(),
        watchDeleteByIdTaskSaga(),
        watchGetAllUserFilterSaga()
    ])
}