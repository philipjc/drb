import './style/_app.css';
import component from './components/mainContainer';

run();

function run() {
  let app = document.createElement('div');
  document.body.appendChild(app);
  app.appendChild(component('Hello, Webpack!'));
};
