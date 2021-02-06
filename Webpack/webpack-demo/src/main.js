import _ from 'lodash';
import './style.css';
import { cube } from './math.js';
 import Print from './print';

console.log(cube)
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack888'], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');
  element.classList.add('hello');
  return element;
}


function createIpt() {
  const ipt = document.createElement('input')
  ipt.type = 'text'
  return ipt
}


document.body.appendChild(component());
document.body.appendChild(createIpt());