import { FORGET_PASSWORD_REQUEST, RECOVER_PASSWORD_REQUEST } from "../../constants/password/passwordConstant";

export function forgetPasswordAction(username) {
    return {
        type: FORGET_PASSWORD_REQUEST,
        username: username 
    }
}

export function recoverPasswordAction(token, password) {
    return {
        type: RECOVER_PASSWORD_REQUEST,
        token: token,
        password: password 
    }
}