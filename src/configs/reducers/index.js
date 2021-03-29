import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer"
import { registerReducer } from "./register/registerReducer"
import { forgetPasswordReducer, recoverPasswordReducer, changePasswordReducer } from "./password/passwordReducer"
import { 
    getAllDestinationsFilterReducer, 
    postDestinationsReducer, 
    getAllDestinationsReducer,
    deleteByIdDestinationsReducer,
    getByIdDestinationsReducer,
    putByIdDestinationsReducer
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

import { getChartsUserReducer, getChartsTaskReducer } from "./charts/chartsReducer"

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
    getAllTaskUnfinishedReducer,
    forgetPasswordReducer,
    recoverPasswordReducer,
    changePasswordReducer,
    getChartsUserReducer,
    getChartsTaskReducer,
    getByIdDestinationsReducer,
    putByIdDestinationsReducer
})

export default rootReducer