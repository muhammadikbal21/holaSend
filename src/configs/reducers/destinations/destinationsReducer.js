import { GET_ALL_DESTINATIONS_FILTER_FAILURE, GET_ALL_DESTINATIONS_FILTER_REQUEST, GET_ALL_DESTINATIONS_FILTER_SUCCESS, POST_DESTINATIONS_FAILURE, POST_DESTINATIONS_REQUEST, POST_DESTINATIONS_SUCCESS } from "../../constants/destinations/destinationsConstant"

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export function getAllDestinationsFilterReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DESTINATIONS_FILTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_ALL_DESTINATIONS_FILTER_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case GET_ALL_DESTINATIONS_FILTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

export function postDestinationsReducer(state = {...initialState}, action) {
    switch (action.type) {
        case POST_DESTINATIONS_REQUEST:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case POST_DESTINATIONS_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case POST_DESTINATIONS_FAILURE:
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