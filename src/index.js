import _ from 'lodash';
import './style.css';

class Test {
	g = () => console.log('Hello Babel!');
}

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'Marcin'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());