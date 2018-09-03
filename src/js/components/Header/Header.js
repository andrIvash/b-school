// @flow

import React from 'react';
import Logo from '../Logo/Logo';
import './Header.scss';

type Props = {
  selectScreen: (evt: EventTarget) => void,
};

const Header = (props: Props) => (
  <header className='header'>
    <div className='container'>
      <a
        className='header__link logo'
        href='/'
        onClick={(evt) => props.selectScreen(evt)}
        title='Лого'
        >
        Лого
      </a>
      <nav className='header__menu menu'>
        <a
          className='menu__link active'
          data-screen='consultant'
          href='/'
          onClick={(evt) => props.selectScreen(evt)}
          > Главная
        </a>
        <a
          className='menu__link'
          data-screen='bullying'
          href='/'
          onClick={(evt) => props.selectScreen(evt)}
          >Услуги
        </a>
        <a
          className='menu__link'
          data-screen='lice'
          href='/'
          onClick={(evt) => props.selectScreen(evt)}
          >
          Контакты
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
    </div>
  </header>
);

export default Header;
