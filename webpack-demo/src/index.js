import _ from 'lodash';
import './style.css';
import Icon from './avatar.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
  //element.appendChild(myIcon);
  console.log(Data);
  return element;
}

var myIcon = new Image();
  myIcon.src = Icon;

document.body.appendChild(component());
document.body.appendChild(myIcon);