import { data } from './face';
import $ from 'jquery';
import './index.css';

const imgUrl = data.face.image.url;
const imgHeight = data.face.image.height;
const imgWidth = data.face.image.width;
// width = 1920 height = 1080
const scale = 2;
const facePosition = {
  start: data.face.start,
  end: data.face.end
}
$('.faceImg').attr('src', imgUrl);
$('.faceImg').width(imgWidth / scale);
$('.faceImg').height(imgHeight / scale);
// 人脸框 的长宽
const faceWidth = (facePosition.end.x - facePosition.start.x) / scale;
const faceHeight = (facePosition.end.y - facePosition.start.y) / scale;
console.log(faceWidth, faceHeight);
var ele = $('<div></div>');
$(ele).css({
  "width": faceWidth,
  "height": faceHeight,
  "position": "absolute",
  "left": facePosition.start.x / 2,
  "top": facePosition.start.y / 2, 
  "border": "1px solid red"
})



$('.face-detect').append(ele);