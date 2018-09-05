// @flow
import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import { data } from './data';

type State = {
  data: Array<Object>
};

type Props = {};


class Chat extends Component<Props, State> {

  state = {
    data: data,
  }

  listQuestions = (list) => list.map(item => (
    <AccordionItem className='acco-child' key={item.id}>
      <AccordionItemTitle>
        <h3 className='sectionList-elem'>
          {item.question}
        </h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <div className='chat__title'>
          <picture>
            <img
              alt='Паранит'
              src={`${window.env.apiHost}/images/paranit.png`}
            />
            <div className='chat__caption'>
              Принц Паранит
            </div>
          </picture>
          <div className='chat__title-text'>
            {item.answer}
          </div>
        </div>
      </AccordionItemBody>
    </AccordionItem>
  ))

  listTopics = () => this.state.data.map(item => (
    <AccordionItem className='acco-parent' key={item.id} uuid={item.id}>
      <AccordionItemTitle>
        <h3 className='u-position-relative'>
          {item.title}
          <div className='accordion__arrow' role='presentation' />
        </h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <Accordion accordion={true}>
          {this.listQuestions(item.list)}
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>
  ))

  render() {
    return (
      <div className='chat'>
        <div className='chat__title'>
          <picture>
            <img
              alt='Паранит'
              src={`${window.env.apiHost}/images/paranit.png`}
            />
            <div className='chat__caption'>
              Принц Паранит
            </div>
          </picture>
          <div className='chat__title-text'>
            Выберите интересущий вас вопрос из списка, и я отвечу на него!
          </div>
        </div>
        <Accordion accordion={true}>
          {this.listTopics()}
        </Accordion>
      </div>
    );
  }
}

export default Chat;
