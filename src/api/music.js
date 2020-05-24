import request from '@/utils/request'
// import jsonp from '@/utils/common.js'
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
// 推荐mv
export const getMvs = () => {
  return request({
    method: 'GET',
    url: '/personalized/mv'
  })
}
// 精品歌单
export const getHighquality = params => {
  return request({
    method: 'GET',
    url: '/top/playlist/highquality',
    params
  })
}
// 歌单列表
export const getPlaylist = params => {
  return request({
    method: 'GET',
    url: '/top/playlist/',
    params
  })
}
// 推荐新音乐
export const getNewsongs = params => {
  return request({
    method: 'GET',
    url: '/top/song',
    params
  })
}
// 播放新音乐
export const playNewMusic = params => {
  return request({
    method: 'GET',
    url: 'song/url',
    params
  })
}
