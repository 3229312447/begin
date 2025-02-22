import request from '@/utils/request';

export function getList() {
  return request({
    url: '/login',
    method: 'get'
  })
}
