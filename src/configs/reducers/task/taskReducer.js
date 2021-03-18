import { POST_TASK_FAILURE, POST_TASK_REQUEST, POST_TASK_SUCCESS } from "../../constants/task/taskConstant"

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export function postTaskReducer(state = {...initialState}, action) {
    switch (action.type) {
        case POST_TASK_REQUEST:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case POST_TASK_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case POST_TASK_FAILURE:
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