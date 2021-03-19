import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer"
import { registerReducer } from "./register/registerReducer"
import { getAllDestinationsReducer, postDestinationsReducer } from "./destinations/destinationsReducer"
import { postTaskReducer, getAllTaskReducer } from "./task/taskReducer"

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getAllDestinationsReducer,
    postTaskReducer,
    postDestinationsReducer,
    getAllTaskReducer
})

export default rootReducer