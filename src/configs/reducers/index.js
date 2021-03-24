import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer"
import { registerReducer } from "./register/registerReducer"
import { 
    getAllDestinationsFilterReducer, 
    postDestinationsReducer, 
    getAllDestinationsReducer,
    deleteByIdDestinationsReducer
 } from "./destinations/destinationsReducer"
import { 
    postTaskReducer, 
    getAllTaskReducer, 
    deleteByIdTaskReducer, 
    getAllTaskFinishedReducer,
    getAllTaskUnfinishedReducer
} from "./task/taskReducer"
import { 
    getAllUserFilterReducer, 
    getAllUserReducer, 
    putByUsernameMakeAdminReducer,
    putByUsernameMakeStaffReducer,
    putByUsernameMakeCourierReducer,
    putByUsernameMakeDisabledReducer
 } from "./user/userReducer"

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getAllDestinationsFilterReducer,
    postTaskReducer,
    postDestinationsReducer,
    getAllTaskReducer,
    deleteByIdTaskReducer,
    getAllUserFilterReducer,
    getAllUserReducer,
    putByUsernameMakeAdminReducer,
    putByUsernameMakeStaffReducer,
    putByUsernameMakeCourierReducer,
    putByUsernameMakeDisabledReducer,
    getAllDestinationsReducer,
    deleteByIdDestinationsReducer,
    getAllTaskFinishedReducer,
    getAllTaskUnfinishedReducer
})

export default rootReducer