import storage from './storage'
export function getToken() {
  return storage.getToken()
}
/**
 * 设置token
 * @param {}} token 
 * @returns 
 */
export function setToken(token) {
  return storage.setToken(token)
}
/**
 * 删除token
 * 
 * @returns 
 */
export function removeToken() {
  return storage.removeToken()
}


// import Cookies from 'js-cookie'

// const TokenKey = 'Token'

// export function getToken() {
//   return Cookies.get(TokenKey)
// }

// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }