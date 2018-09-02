// @flow
import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Bullying from '../Bullying/Bullying';
import Consultant from '../Consultant/Consultant';
import Main from '../Main/Main';
import Lice from '../Lice/Lice';
import { API } from '../../helpers/api';
import { Cookie } from '../../helpers/cookie';
import { Auth } from '../../helpers/auth';
import type { User } from '../../flow-types';

type State = {
  isLoading: boolean,
  user: User,
  activeScreen: String | null
};

const api = new API();

class App extends Component<{}, State> {

  state = {
    isLoading: false,
    user: null,
    activeScreen: null,
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

  getUserInfo = () => {
    this.setState({ isLoading: true });
    api.getUserInfo().then((res) => {
      this.setState({ isLoading: false });
      console.log('res__', res);
      const roles = api.getData().user.roles;
      if (this.isEdu(roles) || this.isParent(roles)) {
        console.log('wellcome !');
        this.setState({ user: res });
      } else {
        console.log('Активность возможна только для преподавателей и родителей!');
      }
    });
  }

  isEdu = roles => { roles.find(role => role === 'EduStaff'); }

  isParent = roles => { roles.find(role => role === 'EduParent'); }

  activeScreen = () => {
    const { activeScreen } = this.state;
    let activeComponent = null;
    switch (activeScreen) {
      case 'consultant' : {
        activeComponent = <Consultant />;
        break;
      }
      case 'bullying' : {
        activeComponent = <Bullying />;
        break;
      }
      case 'lice': {
        activeComponent = <Lice />;
        break;
      }
      default: {
        activeComponent = <Main selectScreen={this.selectScreen} />;
      }
    }
    return activeComponent;
  }

  selectScreen = evt => {
    evt.preventDefault();
    const elem = evt.target;
    this.setState({ activeScreen: elem.dataset.screen });
  }

  render() {
    return (
      <div className='wrapper'>
        <ErrorBoundary>
          <header>header</header>
          <main className='main'>
            {this.activeScreen()}
          </main>
          <footer>footer</footer>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
