import {setUserToken, resetUser} from "./user";
import {reqLogin, reqLogout} from "@/api/login";
import {setToken, removeToken} from "@/utils/auth";
import res from '@/utils/res'

export const login = (username, password) => (dispatch) => {
    return new Promise((resolve, reject) => {
        reqLogin({username: username.trim(), password: password})
            .then((response) => {
                const {data} = response;
                if (res.ok(data)) {
                    const token = res.data(data);
                    dispatch(setUserToken(token));
                    setToken(token);
                    resolve(data);
                } else {
                    debugger
                    const msg = res.message(data);
                    reject(msg);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const logout = (token) => (dispatch) => {
    return new Promise((resolve, reject) => {
        reqLogout(token)
            .then((response) => {
                const {data} = response;
                if (data.status === 0) {
                    dispatch(resetUser());
                    removeToken();
                    resolve(data);
                } else {
                    const msg = data.message;
                    reject(msg);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};
