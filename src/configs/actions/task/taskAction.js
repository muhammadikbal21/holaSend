import { POST_TASK_REQUEST } from "../../constants/task/taskConstant";

export function postTaskAction(model) {
    return {
        type: POST_TASK_REQUEST,
        model: model
    }
}