// @flow

import React from 'react';

const Bullying = () => (
  <div className='bullying'>
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
  </div>
);

export default Bullying;
