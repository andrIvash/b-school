// @flow

import React from 'react';
import Chat from '../Chat/Chat';

type Props = {
  selectScreen: (evt: EventTarget) => void,
};

const Main = (props: Props) => (
  <div className='main'>
    <div className='container'>
      <div className='title-container'>
        <h1 className='page-title'>
          Буллинг в школе:
        </h1>
        <p className='page-title__text'>причины и последствия</p>
      </div>
      <div className='content'>
        <article className='article article--top'>
          <section className='section'>
            <h4 className='section__title'>интерактивный консультант</h4>
            <div className='section__subtitle'>Что такое буллинг и как помочь ребенку?</div>
            <p className='section__text'>
              Почему дети травят друг друга? Какие дети больше других подвержены травле?
              Что делать, если у ребенка вши? На эти и другие вопросы отвечает интерактивный
              консультант!
            </p>
            <a
              className='section__link'
              data-screen='consultant'
              href='/'
              onClick={(evt) => props.selectScreen(evt)}
              title='Задать вопрос'
              >
              Задать вопрос
            </a>
          </section>
          <section className='section section--foto'>
            <picture className='picture picture-right'>
              <img
                alt='Консультант'
                data-screen='main'
                src={`${window.env.apiHost}/images/img1.png`}
              />
            </picture>
          </section>
        </article>

        <article className='article'>
          <section className='section section--foto'>
            <picture className='picture picture-right'>
              <img
                alt='Буллинг'
                data-screen='main'
                src={`${window.env.apiHost}/images/img2.png`}
              />
            </picture>
          </section>
          <section className='section'>
            <h4 className='section__title'>инфографика</h4>
            <div className='section__subtitle'>Как понять, что ребенка травят в школе и каковы причины буллинга?</div>
            <p className='section__text'>
            Буллинг – страшная реалия современной школы. Последствия у травли могут быть
            самые печальные. Как определить, что вашему ребенку нужна помощь?
            </p>
            <a
              className='section__link'
              data-screen='bullying'
              href='/'
              onClick={(evt) => props.selectScreen(evt)}
              title='Смотреть'
              >
              Смотреть
            </a>
          </section>
        </article>

        <article className='article article--bottom'>
          <section className='section'>
            <h4 className='section__title'>инфографика</h4>
            <div className='section__subtitle'>Как защитить себя и ребенка от вшей?</div>
            <p className='section__text'>
            Лето и первый месяц после каникул — период вспышек педикулеза и повышенного
             риска заражения. Какие меры безопасности следует соблюдать и как действовать
             в случае заражения?
            </p>
            <a
              className='section__link'
              data-screen='lice'
              href='/'
              onClick={(evt) => props.selectScreen(evt)}
              title='Смотреть'
              >
              Смотреть
            </a>
          </section>
          <section className='section section--foto'>
            <picture className='picture picture-right'>
              <img
                alt='Вши'
                data-screen='main'
                src={`${window.env.apiHost}/images/img3.png`}
              />
            </picture>
          </section>
        </article>
      </div>
    </div>
  </div>
);

export default Main;
