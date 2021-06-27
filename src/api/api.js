import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = 'https://autumnfish.cn'

/*获取轮播图*/
export function getSliderPics(callback){
  axios.get('/banner?type=2').then(res => {
    callback(res.data.banners)
    // console.log(res.data.banners)
  })
  .catch(err => console.log(err))
}

/* 获取歌曲播放地址 */
export function playMusic(callback,id){
  axios.get('/song/url?id='+id).then(res => {
    callback(res.data.data[0])
    // console.log(res.data.banners)
  })
  .catch(err => console.log(err))
}

/* 查询歌曲 */
export function searchMusic(callback,name){
  axios.get('/search?limit=100&keywords='+name).then(res => {
    callback(res.data.result.songs)
    // console.log(res.data.banners)
  })
  .catch(err => console.log(err))
}

/* 获取图片url */
export function getpicUrl(callback,id){
  axios.get('/song/detail?ids='+id).then(res => {
    callback(res.data.songs[0].al.picUrl);
    // console.log(res.data.banners)
  })
  .catch(err => console.log(err))
}
/* 存储 */
const favorites=[];
export function getFavorites(callback){
  // 通过回调函数传参
    setTimeout(() => callback(favorites), 100);
}

/* 获取歌手页 */
export function searchArtist(callback){
  axios.get('/artist/list?area=7&limit=30').then(res => {
    callback(res.data.artists)
    // console.log(res.data.banners)
  })
  .catch(err => console.log(err))
}
