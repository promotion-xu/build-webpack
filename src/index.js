import { data, face } from './face';
import $ from 'jquery';
import './index.css';


/// 多人脸
console.log('face', face);
const imgUrl = face[0].mediaUrl;
const imgWidth = face[0].imgInfo.width;
const imgHeight = face[0].imgInfo.height;
// 图片属性
const scale = 2; // 缩小倍数
$('.faceImg').attr('src', imgUrl);
$('.faceImg').width(imgWidth / scale);
$('.faceImg').height(imgHeight / scale);

face.forEach((v, index) => {
  var ele = $(`<div class=face--${index+1}></div>`)
  console.log('ele', ele);

  $(ele).css({
    "position": "absolute",
    "width": (v.vertices[1].x - v.vertices[0].x) / scale,
    "height": (v.vertices[1].y - v.vertices[0].y) / scale,
    "left": v.vertices[0].x / scale,
    "top": v.vertices[0].y / scale,
    "border": "1px solid red"
  })
  $(".face-detect").append(ele);
})


/// 单人脸
// const imgUrl = data.face.image.url;
// const imgHeight = data.face.image.height;
// const imgWidth = data.face.image.width;
// // width = 1920 height = 1080
// const scale = 2;
// const facePosition = {
//   start: data.face.start,
//   end: data.face.end
// }
// $('.faceImg').attr('src', imgUrl);
// $('.faceImg').width(imgWidth / scale);
// $('.faceImg').height(imgHeight / scale);
// // 人脸框 的长宽
// const faceWidth = (facePosition.end.x - facePosition.start.x) / scale;
// const faceHeight = (facePosition.end.y - facePosition.start.y) / scale;
// console.log(faceWidth, faceHeight);
// var ele = $('<div></div>');
// $(ele).css({
//   "width": faceWidth,
//   "height": faceHeight,
//   "position": "absolute",
//   "left": facePosition.start.x / 2,
//   "top": facePosition.start.y / 2, 
//   "border": "1px solid red"
// })
// $('.face-detect').append(ele);