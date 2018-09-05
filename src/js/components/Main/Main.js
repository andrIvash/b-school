// @flow

import React from 'react';
import Chat from '../Chat/Chat';

type Props = {
  selectScreen: (evt: EventTarget) => void,
};

const Main = (props: Props) => (
  <div className='main'>
    <div className='container'>
      <h1 className='page-title'>
        title
      </h1>
      <p className='page-title__text'>title text</p>
      <div className='content'>
        <article className='article'>
          <section className='section'>
            <h4 className='section__title'>Heading</h4>
            <div className='section__subtitle'>subtitle</div>
            <p className='section__text'>text</p>
            <a
              className='section__link'
              data-screen='main'
              href='/'
              onClick={(evt) => props.selectScreen(evt)}
              title='Лого'
              >
              link
            </a>
          </section>
          <section className='section'>
            <picture>
              <img
                alt='Паранит'
                data-screen='main'
                src={`${window.env.apiHost}/images/LOGO.png`}
              />
            </picture>
          </section>
        </article>
        <ul className='sectionList'>
          <li className='sectionList-elem'>
            list text
          </li>
          <li className='sectionList-elem'>
            list text
          </li>
          <li className='sectionList-elem'>
            list text
          </li>
          <li className='sectionList-elem'>
            list text
          </li>
        </ul>

        <ul className='sectionList sectionList--foto'>
          <li className='sectionList-elem'>
            <picture>
              <img
                alt='Паранит'
                src={`${window.env.apiHost}/images/icon1.png`}
              />
            </picture>
            <p>
              text
            </p>
          </li>
          <li className='sectionList_-elem'>
            <picture>
              <img
                alt='Паранит'
                src={`${window.env.apiHost}/images/icon1.png`}
              />
            </picture>
            <p>
              text
            </p>
          </li>
          <li className='sectionList-elem'>
            <picture>
              <img
                alt='Паранит'
                src={`${window.env.apiHost}/images/icon1.png`}
              />
            </picture>
            <p>
              text text text text text text text text text text text text text text text text text text 
            </p>
          </li>
          <li className='sectionList-elem'>
            <picture>
              <img
                alt='Паранит'
                src={`${window.env.apiHost}/images/icon1.png`}
              />
            </picture>
            <p>
              text
            </p>
          </li>
          
        </ul>

        <section className='sectionFoto'>
          <picture>
            <img
              alt='Паранит'
              src={`${window.env.apiHost}/images/icon1.png`}
            />
          </picture>
          <ul className='sectionFoto__sublist'>
            <li className='sectionFoto__elem'>
              list text
            </li>
            <li className='sectionFoto__elem'>
              list text
            </li>
            <li className='sectionFoto__elem'>
              list text
            </li>
          </ul>
        </section>
        <Chat />
      </div>
    </div>
  </div>
);

export default Main;
