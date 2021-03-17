import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer"
import { registerReducer } from "./register/registerReducer"
import { getAllDestinationsReducer } from "./destinations/destinationsReducer"

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getAllDestinationsReducer
})

export default rootReducer