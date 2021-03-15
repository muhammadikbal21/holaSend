import { all } from 'redux-saga/effects'
import { watchLoginSaga } from "./login/loginSaga";

export default function* rootSaga() {
    yield all([
        watchLoginSaga()
    ])
}