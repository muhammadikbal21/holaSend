import { all } from 'redux-saga/effects'
import { 
    watchDeleteByIdDestinationskSaga, 
    watchGetAllDestinationsFilterSaga, 
    watchGetAllDestinationsSaga, 
    watchPostDestinationsSaga 
} from './destinations/destinationsSaga';
import { watchLoginSaga } from "./login/loginSaga";
import { watchChangePasswordSaga, watchForgetPasswordSaga, watchRecoverPasswordSaga } from './password/passwordSaga';
import { watchRegisterSaga } from './register/registerSaga';
import { 
    watchDeleteByIdTaskSaga, 
    watchGetAllTaskSaga, 
    watchPostTaskSaga, 
    watchGetAllTaskFinishedSaga, 
    watchGetAllTaskUnfinishedSaga
} from './task/taskSaga';
import { 
    watchGetAllUserFilterSaga, 
    watchGetAllUserSaga, 
    watchPutByUsernameMakeAdminSaga, 
    watchPutByUsernameMakeCourierSaga, 
    watchPutByUsernameMakeDisabledSaga, 
    watchPutByUsernameMakeStaffSaga 
} from './user/userSaga';

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchRegisterSaga(),
        watchGetAllDestinationsFilterSaga(),
        watchPostTaskSaga(),
        watchPostDestinationsSaga(),
        watchGetAllTaskSaga(),
        watchDeleteByIdTaskSaga(),
        watchGetAllUserFilterSaga(),
        watchGetAllUserSaga(),
        watchPutByUsernameMakeAdminSaga(),
        watchPutByUsernameMakeStaffSaga(),
        watchPutByUsernameMakeCourierSaga(),
        watchPutByUsernameMakeDisabledSaga(),
        watchGetAllDestinationsSaga(),
        watchDeleteByIdDestinationskSaga(),
        watchGetAllTaskFinishedSaga(),
        watchGetAllTaskUnfinishedSaga(),
        watchForgetPasswordSaga(),
        watchRecoverPasswordSaga(),
        watchChangePasswordSaga()
    ])
}