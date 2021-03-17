import { GET_ALL_DESTINATIONS_REQUEST } from "../../constants/destinations/destinationsConstant";

export function getAllDestinationsAction() {
    return {
        type: GET_ALL_DESTINATIONS_REQUEST
    }
}