import { GET_ALL_DESTINATIONS_FAILURE, GET_ALL_DESTINATIONS_REQUEST, GET_ALL_DESTINATIONS_SUCCESS } from "../../constants/destinations/destinationsConstant"

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export function getAllDestinationsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DESTINATIONS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_ALL_DESTINATIONS_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case GET_ALL_DESTINATIONS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}