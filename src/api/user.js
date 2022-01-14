import request from '@/utils/request'
import api from '@/utils/api'
/**
 * 获取用户信息
 * @param {} data 
 * @returns 
 */
export function reqUserInfo(data) {
  return api.get('/user/user-info');
}

export function getUsers() {
  return request({
    url: '/user/list',
    method: 'get'
  })
}

export function deleteUser(data) {
  return request({
    url: '/user/delete',
    method: 'post',
    data
  })
}

export function editUser(data) {
  return request({
    url: '/user/edit',
    method: 'post',
    data
  })
}

export function reqValidatUserID(data) {
  return request({
    url: '/user/validatUserID',
    method: 'post',
    data
  })
}

export function addUser(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}