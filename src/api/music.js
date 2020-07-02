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
// 获取MV
export const getAllMvs = params => {
  return request({
    method: 'GET',
    url: '/mv/all',
    params
  })
}
// 搜索
export const getSearchResult = params => {
  return request({
    method: 'GET',
    url: '/search',
    params
  })
}
// 歌单详情
export const getDdetail = params => {
  return request({
    method: 'GET',
    url: '/playlist/detail',
    params
  })
}
// 获取热门评论
export const getHot = params => {
  return request({
    method: 'GET',
    url: '/comment/hot',
    params
  })
}
// 获取最新评论
export const getNewComment = params => {
  return request({
    method: 'GET',
    url: '/comment/playlist',
    params
  })
}
// 获取mv
export const getMv = params => {
  return request({
    method: 'GET',
    url: '/mv/url',
    params
  })
}
// mv相关
export const geSimitMv = params => {
  return request({
    method: 'GET',
    url: '/simi/mv',
    params
  })
}
// 获取mv相关的信息
export const gedetail = params => {
  return request({
    method: 'GET',
    url: '/mv/detail',
    params
  })
}
// 获取歌手信息
export const geArtists = params => {
  return request({
    method: 'GET',
    url: '/artists',
    params
  })
}
// 获取mv评论
export const geMvComment = params => {
  return request({
    method: 'GET',
    url: '/comment/mv',
    params
  })
}
