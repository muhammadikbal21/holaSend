import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../constants/login/loginConstant";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export function loginReducer(state = {...initialState}, action) {
    // console.log(action)
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case LOGIN_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: action.error
            }
        default:
            return {
                ...state,
                data: null
            }
    }
}