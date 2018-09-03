// @flow

import React from 'react';

type Props = {
  active: Number,
  sublist: Array<Object>,
  getAnswer: (id: Number) => void,
  id: Number,
  key: Number,
  setActive: (id: Number) => void,
  title: String,
}


const subList = (props: Props) => props.sublist.map(item => (
  <li
    className='citem__button'
    key={item.id}
    onClick={() => props.getAnswer(props.id)}
    role='button'
    >
    {item.question}
  </li>
)); 


const ChatItem = (props: Props) => {
  const activeClass = props.active === props.id ? 'citem active' : 'citem';
  return (
    <li className={activeClass}>
      <p
        className='citem__title'
        onClick={() => {props.setActive(props.id)}}
        role='button'
        >
        {props.title}
      </p>
      <ul className='citem__sublist'>
        {subList(props)}
      </ul>
    </li>
  );
}

export default ChatItem;
