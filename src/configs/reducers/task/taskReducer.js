import { DELETE_BY_ID_TASK_FAILURE, DELETE_BY_ID_TASK_REQUEST, DELETE_BY_ID_TASK_SUCCESS, GET_ALL_TASK_FAILURE, GET_ALL_TASK_REQUEST, GET_ALL_TASK_SUCCESS, POST_TASK_FAILURE, POST_TASK_REQUEST, POST_TASK_SUCCESS } from "../../constants/task/taskConstant"

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

export function getAllTaskReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TASK_REQUEST:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case GET_ALL_TASK_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case GET_ALL_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

export function deleteByIdTaskReducer(state = {...initialState, data: false}, action) {
    switch (action.type) {
        case DELETE_BY_ID_TASK_REQUEST:
            return {
                ...state,
                data: false,
                loading: true
            }
        case DELETE_BY_ID_TASK_SUCCESS:
            return { 
                data: action.data,
                loading: false,
                error: null
            }
        case DELETE_BY_ID_TASK_FAILURE:
            return { 
                data: false,
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state,
                data: false
            }
    }
}