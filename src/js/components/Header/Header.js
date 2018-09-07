// @flow

import React from 'react';
import Logo from '../Logo/Logo';

type Props = {
  activeScreen: String,
  selectScreen: (evt: EventTarget) => void,
  burgerToggle: (evt: EventTarget) => void
};

const Header = (props: Props) => (
  <header className='header'>
    <div className='container'>
      <a
        className='header__link logo'
        href={props.activeScreen === 'main' ? 'http://vsham.net/?utm_source=dnevnik&utm_medium=article' : '/'}
        onClick={
          props.activeScreen === 'main' ? () => gtag('event', 'Лого Клик', { 'event_category': 'Лого', 'event_action': 'Клик', }) :
          (evt) => {
            gtag('event', 'Главная Клик', { 'event_category': 'Главная', 'event_action': 'Клик', });
            props.selectScreen(evt);
          }
        }
        rel='noreferrer noopener'
        title='Паранит'
        target='_blank'
        >
        <picture>
          <img
            alt='Паранит'
            data-screen='main'
            src={`${window.env.apiHost}/images/LOGO.png`}
          />
        </picture>
      </a>
      <nav className='header__menu menu'>
        <a
          className={props.activeScreen === 'consultant' ?
            'menu__link active' : 'menu__link'}
          data-screen='consultant'
          href='/'
          onClick={
            (evt) => {
              gtag('event', 'Консультант Клик', { 'event_category': 'Консультант', 'event_action': 'Клик', });
              props.selectScreen(evt);
            }
          }
          > Интерактивный консультант
        </a>
        <a
          className={props.activeScreen === 'bullying' ?
            'menu__link active' : 'menu__link'}
          data-screen='bullying'
          href='/'
          onClick={
            (evt) => {
              gtag('event', 'Буллинг Клик', { 'event_category': 'Буллинг', 'event_action': 'Клик', });
              props.selectScreen(evt);
            }
          }
          >Инфографика о буллинге
        </a>
        <a
          className={props.activeScreen === 'lice' ?
            'menu__link active' : 'menu__link'}
          data-screen='lice'
          href='/'
          onClick={
            (evt) => {
              gtag('event', 'Педикулез Клик', { 'event_category': 'Педикулез', 'event_action': 'Клик', });
              props.selectScreen(evt);
            }
          }
          >
          Как защитить себя и ребенка от вшей
        </a>
      </nav>
      <a
        className='header__link dnevnik'
        href='https://dnevnik.ru/'
        rel='noopener noreferrer'
        target='_blank'
        title='Дневник'
        >
        Дневник <Logo />
      </a>
      <a
        className='header__link close'
        href='/'
        onClick={(evt) => props.burgerToggle(evt)}
        title='close'
        >
        <div className='hamburger' id='hamburger-1'>
          <span className='line' />
          <span className='line' />
          <span className='line' />
        </div>
      </a>
    </div>
    <div className='narrow'>
      <nav className='narrowLinks animated'>
        <div className='narrowLinks__wrapper'>
          <a
            className='menu__link'
            data-screen='main'
            href='/'
            onClick={
              (evt) => {
                gtag('event', 'Главная Клик', { 'event_category': 'Главная', 'event_action': 'Клик', });
                props.burgerToggle(evt);
              }
            }
            >
            Главная
          </a>
          <a
            className='menu__link'
            data-screen='consultant'
            href='/'
            onClick={
              (evt) => {
                gtag('event', 'Консультант Клик', { 'event_category': 'Консультант', 'event_action': 'Клик', });
                props.burgerToggle(evt);
              }
            }
            >
            Интерактивный консультант
          </a>
          <a
            className='menu__link'
            data-screen='bullying'
            href='/'
            onClick={
              (evt) => {
                gtag('event', 'Буллинг Клик', { 'event_category': 'Буллинг', 'event_action': 'Клик', });
                props.burgerToggle(evt);
              }
            }
            >
            Инфографика о буллинге
          </a>
          <a
            className='menu__link'
            data-screen='lice'
            href='/'
            onClick={
              (evt) => {
                gtag('event', 'Педикулез Клик', { 'event_category': 'Педикулез', 'event_action': 'Клик', });
                props.burgerToggle(evt);
              }
            }
            >
            Как защитить себя и ребенка от вшей
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
