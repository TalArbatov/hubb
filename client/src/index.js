import React from 'react'
import ReactDOM from 'react-dom';
import Entry from './Entry';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(Entry);

if (module.hot) {
  module.hot.accept('./Entry', () => {
    const NextRootContainer = require('./Entry').default;
    render(NextRootContainer);
  });
}
