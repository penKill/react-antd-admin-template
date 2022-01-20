import * as types from "../action-types";
import { getToken } from "@/utils/auth";
const initUserInfo = {
  name: "",
  role: "",
  avatar:"",
  token: getToken(),
};
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case types.USER_SET_USER_INFO:
      console.log('user',state);
      console.log('action',action);
      return {
        ...state,
        name: action.user.username,
        role: action.roleList,
        avatar: action.avatar,
      };
    case types.USER_RESET_USER:
      return {};
    default:
      return state;
  }
}
