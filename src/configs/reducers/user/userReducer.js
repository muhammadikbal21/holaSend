import { GET_ALL_USER_FILTER_FAILURE, GET_ALL_USER_FILTER_REQUEST, GET_ALL_USER_FILTER_SUCCESS } from "../../constants/user/userConstant"

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export function getAllUserFilterReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USER_FILTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_ALL_USER_FILTER_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case GET_ALL_USER_FILTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}