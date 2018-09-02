// @flow
import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { API } from '../../helpers/api';
import { Cookie } from '../../helpers/cookie';
import { Auth } from '../../helpers/auth';
import type { Film, PosterData, View } from '../../flow-types.js';

type State = {};

const api = new API();

class App extends Component<{}, State> {

  state = {
    isLoading: false,
    user: null,
  }

  componentDidMount() {
    console.log('Running App version ! ' + window.env.API );
    api.init();
    if (void 0 !== Cookie.get('token')) {
      api.token = Cookie.get('token');
      this.getUserInfo();
    } else if (document.location.search.indexOf('auth') === -1) {
      Auth.auth();
    }
  }

  getUserInfo() {
    this.setState({ isLoading: true });
    api.getUserInfo().then((res) => {
      this.setState({ isLoading: false });
      console.log('res__', res);
      const roles = api.getData().user.roles;
      if (this.isEdu(roles) || this.isParent(roles)) {
        console.log('Активность возможна только для преподавателей и родителей!');
      } else {
        console.log('wellcome !');
      }
    });
  }

  isEdu(roles) { roles.find(role => role === 'EduStaff'); }

  isParent(roles) { roles.find(role => role === 'EduParent'); }

  render() {
    return (
      <div className='wrapper'>
        <ErrorBoundary>
          <header>header</header>
          <main className='main'></main>
          <footer>footer</footer>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
