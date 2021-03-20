import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer"
import { registerReducer } from "./register/registerReducer"
import { getAllDestinationsReducer, postDestinationsReducer } from "./destinations/destinationsReducer"
import { postTaskReducer, getAllTaskReducer, deleteByIdTaskReducer } from "./task/taskReducer"

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getAllDestinationsReducer,
    postTaskReducer,
    postDestinationsReducer,
    getAllTaskReducer,
    deleteByIdTaskReducer,
    
})

export default rootReducer