import request from '@/utils/request'
import api from '@/utils/api'

export function reqLogin(data) {
  return api.post('/login', data)
}

export function reqLogout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}