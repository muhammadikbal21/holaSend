import { GET_ALL_DESTINATIONS_FILTER_REQUEST, POST_DESTINATIONS_REQUEST } from "../../constants/destinations/destinationsConstant";

export function getAllDestinationsFilterAction() {
    return {
        type: GET_ALL_DESTINATIONS_FILTER_REQUEST
    }
}

export function postDestinationsAction(model) {
    return {
        type: POST_DESTINATIONS_REQUEST,
        model: model
    }
}