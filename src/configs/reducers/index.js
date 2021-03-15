import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer"
import { registerReducer } from "./register/registerReducer"

const rootReducer = combineReducers({
    loginReducer,
    registerReducer
})

export default rootReducer