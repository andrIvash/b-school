// @flow

import React from 'react';

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
  </div>
);

export default Main;
