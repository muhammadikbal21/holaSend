import { GET_ALL_DESTINATIONS_REQUEST, POST_DESTINATIONS_REQUEST } from "../../constants/destinations/destinationsConstant";

export function getAllDestinationsAction() {
    return {
        type: GET_ALL_DESTINATIONS_REQUEST
    }
}

export function postDestinationsAction(model) {
    return {
        type: POST_DESTINATIONS_REQUEST,
        model: model
    }
}