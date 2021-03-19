import { GET_ALL_TASK_REQUEST, POST_TASK_REQUEST } from "../../constants/task/taskConstant";

export function postTaskAction(model) {
    return {
        type: POST_TASK_REQUEST,
        model: model
    }
}

export function getAllTaskAction() {
    return {
        type: GET_ALL_TASK_REQUEST
    }
}