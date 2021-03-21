import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer"
import { registerReducer } from "./register/registerReducer"
import { getAllDestinationsFilterReducer, postDestinationsReducer } from "./destinations/destinationsReducer"
import { postTaskReducer, getAllTaskReducer, deleteByIdTaskReducer } from "./task/taskReducer"
import { getAllUserFilterReducer } from "./user/userReducer"

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getAllDestinationsFilterReducer,
    postTaskReducer,
    postDestinationsReducer,
    getAllTaskReducer,
    deleteByIdTaskReducer,
    getAllUserFilterReducer
})

export default rootReducer