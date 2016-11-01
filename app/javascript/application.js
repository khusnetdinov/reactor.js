import ReactDOM from 'react-dom';
import React from 'react';

import Application from './components/Application';

document.addEventListener('DOMContentLoaded', () => {
  const application = (<Application />);
  const element = document.querySelector('#application');

  ReactDOM.render(application, element);
});
