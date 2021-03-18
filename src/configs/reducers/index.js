import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer"
import { registerReducer } from "./register/registerReducer"
import { getAllDestinationsReducer } from "./destinations/destinationsReducer"
import { postTaskReducer } from "./task/taskReducer"

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getAllDestinationsReducer,
    postTaskReducer
})

export default rootReducer