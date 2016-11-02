import React from 'react';
import ReactDOM from 'react-dom';

import ApplicationWithRoutes from './routes';

document.addEventListener('DOMContentLoaded', () => {
  const toElement = document.querySelector('#application');

  ReactDOM.render(ApplicationWithRoutes, toElement);
});
