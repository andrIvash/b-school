// @flow
import React, { Component } from 'react';
import Modal from 'react-modal';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Bullying from '../Bullying/Bullying';
import Consultant from '../Consultant/Consultant';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Lice from '../Lice/Lice';
import { API } from '../../helpers/api';
import { Cookie } from '../../helpers/cookie';
import { Auth } from '../../helpers/auth';
import type { User } from '../../flow-types';

type State = {
  isLoading: boolean,
  user: User | null,
  activeScreen: String | null,
  modalIsOpen: boolean,
};

type Props = {};
const api = new API();

// modal settings
Modal.setAppElement('#app');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'cornsilk',
  },
};

class App extends Component<Props, State> {
  constructor(props) {
    super(props: Props);

    this.backTop = React.createRef();
    this.state = {
      isLoading: false,
      user: null,
      activeScreen: null,
      modalIsOpen: false,
    };
  }

  componentDidMount() {
    console.log('Running App version ! ' + window.env.apiHost);
    window.addEventListener('scroll', this.handleScroll);
    api.init();
    if (void 0 !== Cookie.get('token')) {
      api.token = Cookie.get('token');
      this.getUserInfo();
    } else if (document.location.search.indexOf('auth') === -1) {
      Auth.auth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getUserInfo = () => {
    this.setState({ isLoading: true });
    api.getUserInfo().then((res) => {
      setTimeout(() => {
        this.setState({ isLoading: false });
        const roles = api.getData().user.roles;
        if (this.isEdu(roles) || this.isParent(roles)) {
          console.log('welcome !');
          this.setState({ user: res });
        } else {
          this.setState({ modalIsOpen: true });
          console.log('Активность возможна только для преподавателей и родителей!');
        }
      }, 2000);
    });
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const node = this.backTop.current;

    if (scrollTop > 150) {
      node.className = 'back-top animated fadeIn';
    }
    if ( scrollTop < 150 && node.classList.contains('fadeIn')) {
        node.className = 'back-top animated fadeOut';
    }
  }

  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  openModal = () => {this.setState({ modalIsOpen: true }); }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    window.location.reload();
  }

  isEdu = roles => roles.find(role => role === 'EduStaff');

  isParent = roles => roles.find(role => role === 'EduParent');

  activeScreen = () => {
    const { activeScreen } = this.state;
    let activeComponent = null;
    switch (activeScreen) {
      case 'consultant' : {
        activeComponent = <Consultant selectScreen={this.selectScreen} />;
        break;
      }
      case 'bullying' : {
        activeComponent = <Bullying selectScreen={this.selectScreen} />;
        break;
      }
      case 'lice': {
        activeComponent = <Lice selectScreen={this.selectScreen} />;
        break;
      }
      case 'main': {
        activeComponent = <Main selectScreen={this.selectScreen} />;
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
    if (elem.dataset.screen) {
      this.setState({ activeScreen: elem.dataset.screen });
    }
  }

  burgerToggle = evt => {
    evt.preventDefault();
		const linksEl = document.querySelector('.narrowLinks');
    const closeBtn = document.querySelector('#hamburger-1');
		if (linksEl.style.display === 'block') {
      linksEl.classList.remove('fadeInLeft');
      document.body.classList.remove('no-sroll');
      closeBtn.classList.remove('is-active');
      document.body.style.overflow = 'auto';
      linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
      document.body.style.overflow = 'hidden';
      linksEl.classList.add('fadeInLeft');
      closeBtn.classList.add('is-active');
      document.body.classList.add('no-sroll');
		}
    this.selectScreen(evt);
	}

  render() {
    const footerStyle = {height: '50px'};
    const { isLoading, modalIsOpen, user } = this.state;
    if (isLoading) {
      return (
        <div className='wrapper'>
          <ErrorBoundary>
            <header />
            <main className='main'>
              Loading ...
            </main>
            <footer style={footerStyle} />
          </ErrorBoundary>
        </div>
      );
    }

    if (modalIsOpen || user === null) {
      return (
        <div className='wrapper'>
          <ErrorBoundary>
            <header />
            <main className='main' />
            <footer />
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              >
              <h2>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
            </Modal>
          </ErrorBoundary>
        </div>
      );
    }

    return (
      <div className='wrapper'>
        <ErrorBoundary>
          <Header
            activeScreen={this.state.activeScreen}
            burgerToggle={this.burgerToggle}
            selectScreen={this.selectScreen}
          />
          <div className='main' role='main'>
            {this.activeScreen()}
          </div>
          <footer style={footerStyle} />
          <div className='banner'>Имеются противопоказания, перед применением необходимо ознакомиться с инструкцией</div>
          <button
            className='back-top'
            onClick={this.scrollTop}
            ref={this.backTop}
            type='button'
            >
            Наверх
          </button>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
