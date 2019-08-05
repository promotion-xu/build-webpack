
import _ from 'lodash';
import './index.css';
// import data from './face.js';
const data = require('./face');
import icon from './1.png';
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'xuzhen'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = icon;
  console.error('I get error', data);
  return element;
}

document.body.appendChild(component());
