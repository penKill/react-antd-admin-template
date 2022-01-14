import * as types from "../action-types";
import { reqUserInfo } from "@/api/user";
import res from '@/utils/res'

export const getUserInfo = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqUserInfo()
      .then((response) => {
        const { data } = response;
        if (res.ok(data)) {
          const userInfo = data.userInfo;
          dispatch(setUserInfo(userInfo));
          resolve(data);
        } else {
          const msg = res.message(data);
          reject(msg);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setUserToken = (token) => {
  return {
    type: types.USER_SET_USER_TOKEN,
    token,
  };
};

export const setUserInfo = (userInfo) => {
  return {
    type: types.USER_SET_USER_INFO,
    ...userInfo,
  };
};

export const resetUser = () => {
  return {
    type: types.USER_RESET_USER,
  };
};
