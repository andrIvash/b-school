// @flow

import React from 'react';
import Chat from '../Chat/Chat';

type Props = {
  selectScreen: (evt: EventTarget) => void,
};

const Main = (props: Props) => (
  <div className='main'>
    main
    <a
      data-screen='lice'
      href='/'
      onClick={(evt) => props.selectScreen(evt)}
      >
      lice
    </a>
    sdfsdfsdfdsfsdfsdf
    sdfsdfsdfsdfsdfsdf
    sdfsdfsdfsdfsfsdfs
    sdfsdfsdfdsfsdfsdf
    sdfsdfsdfsdfsdfsdf
    sdfsdfsdfsdfsfsdfs
    sdfsdfsdfdsfsdfsdf
    sdfsdfsdfsdfsdfsdf
    sdfsdfsdfsdfsfsdfs
    sdfsdfsdfdsfsdfsdf
    sdfsdfsdfsdfsdfsdf
    sdfsdfsdfsdfsfsdfs
    sdfsdfsdfdsfsdfsdf
    sdfsdfsdfsdfsdfsdf
    sdfsdfsdfsdfsfsdfs
    sdfsdfsdfdsfsdfsdf
    sdfsdfsdfsdfsdfsdf
    sdfsdfsdfsdfsfsdfs
    sdfsdfsdfdsfsdfsdf
    sdfsdfsdfsdfsdfsdf
    sdfsdfsdfsdfsfsdfs
    sdfsdfsdfdsfsdfsdf
    sdfsdfsdfsdfsdfsdf
    sdfsdfsdfsdfsfsdfs
    sdfsdfsdfdsfsdfsdf
    sdfsdfsdfsdfsdfsdf
    sdfsdfsdfsdfsfsdfs
    <Chat />
  </div>
);

export default Main;
