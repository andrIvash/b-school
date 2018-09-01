// @flow
import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import helpers from '../../helpers';
import type { Film, PosterData, View } from '../../flow-types.js';

type State = {};

class App extends Component<{}, State> {

  state = {}

  componentDidMount() {}

  render() {
    return (
      <div className='wrapper'>
        <ErrorBoundary>
          <header>header</header>
          <main>main</main>
          <footer>footer</footer>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
