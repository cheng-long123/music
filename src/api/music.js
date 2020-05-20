import request from '@/utils/request'
// 轮播图
export const getBanner = () => {
  return request({
    method: 'GET',
    url: 'banner'
  })
}
// 相关歌单
export const getResource = params => {
  return request({
    method: 'GET',
    url: '/personalized',
    params
  })
}
// 推荐新音乐
export const getNewsong = params => {
  return request({
    method: 'GET',
    url: '/personalized/newsong',
    params
  })
}
// 推荐新音乐
export const getMusicUrl = params => {
  return request({
    method: 'GET',
    url: '/song/url',
    params
  })
}
