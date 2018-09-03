// @flow
import React, { Component } from 'react';
import ChatItem from '../ChatItem/ChatItem';
import './Chat.scss';

type State = {
  data: Array<Object>
};

type Props = {};


class Chat extends Component<Props, State> {

  state = {
    activeItem: null,
    data: [
      {
        id: 1,
        title: 'title 1',
        list: [
          {
            id: 1,
            question: '1+1',
            answer: '2',
          },
        ],
      },
      {
        id: 2,
        title: 'title 2',
        list: [
          {
            id: 1,
            question: '2+2',
            answer: '4',
          },
        ],
      },
    ],
  }

  getAnswer = (id: Number) => {
    const { data } = this.state;
    console.log(data.find(elem => elem.id === id));
  }

  setActive = (id: Number) => {
    this.setState({activeItem: id === this.state.activeItem ? null : id });
  }

  listQuestions = () => this.state.data.map(item => (
    <ChatItem
      active={this.state.activeItem}
      getAnswer={this.getAnswer}
      id={item.id}
      key={item.id}
      setActive={this.setActive}
      sublist={item.list}
      title={item.title}
    />
  ));

  render() {
    return (
      <div className='chat'>
        <section>
          <h3>Questions</h3>
          <ul className='chat__list'>
            {this.listQuestions()}
          </ul>
        </section>
        <section>
          <h3>Answers</h3>
          <ul>
              <li>list item </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Chat;