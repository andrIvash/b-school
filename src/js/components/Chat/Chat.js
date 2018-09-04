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
    <AccordionItem key={item.id}>
      <AccordionItemTitle>
        <h3>
          {item.question}
        </h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        {item.answer}
      </AccordionItemBody>
    </AccordionItem>
  ))

  listTopics = () => this.state.data.map(item => (
    <AccordionItem key={item.id} uuid={item.id}>
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
        <Accordion accordion={true}>
          {this.listTopics()}
        </Accordion>
      </div>
    );
  }
}

export default Chat;
