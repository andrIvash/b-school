// @flow
import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import '../styles/app.scss';

const app = document.getElementById('app');
if (app === null) {
  throw new Error('no app element');
}
render(
  <App />,
  app,
);
