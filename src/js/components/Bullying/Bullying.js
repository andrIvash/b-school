// @flow

import React from 'react';

type Props = {
  selectScreen: (evt: EventTarget) => void,
};

const Bullying = (props: Props) => (
  <div className='bullying'>
    <div className='container'>
      <div className='title-container bullying__container'>
        <h2 className='page-title'>
          как понять, что ребенка травят в школе?
        </h2>
        <p className='page-title__text'>
          Буллинг – страшная реалия современной школы. Последствия
          у травли могут быть самые печальные. Как определить, что вашему
          ребенку нужна помощь? Обратите внимание на следующие изменения
          в его поведении
        </p>
      </div>
      <article className='bullying-article'>
        <section className='sectionFoto'>
          <picture>
            <img
              alt='Буллинг'
              src={`${window.env.apiHost}/images/1.png`}
            />
          </picture>
          <ul className='sectionFoto__sublist'>
            <li className='sectionFoto__elem'>
            Ссоры со старыми друзьями
            </li>
            <li className='sectionFoto__elem'>
              Подавленность, раздражительность
            </li>
            <li className='sectionFoto__elem'>
              Потеря аппетита
            </li>
            <li className='sectionFoto__elem'>
              Ночные кошмары, бессонница
            </li>
          </ul>
        </section>
        <section className='sectionFoto'>
          <picture>
            <img
              alt='Буллинг'
              src={`${window.env.apiHost}/images/2.png`}
            />
          </picture>
          <ul className='sectionFoto__sublist'>
            <li className='sectionFoto__elem'>
              Потеря интереса к учебе, ухудшение успеваемости
            </li>
            <li className='sectionFoto__elem'>
              Ребенок ищет повод не идти в школу или на секцию
            </li>
            <li className='sectionFoto__elem'>
              Побеги из дома
            </li>
          </ul>
        </section>
        <section className='sectionFoto'>
          <picture>
            <img
              alt='Буллинг'
              src={`${window.env.apiHost}/images/3.png`}
            />
          </picture>
          <ul className='sectionFoto__sublist'>
            <li className='sectionFoto__elem'>
              Синяки и царапины на теле
            </li>
            <li className='sectionFoto__elem'>
              Ложь в ответ на вопрос родителя: «Откуда синяк?»
            </li>
            <li className='sectionFoto__elem'>
              Частая потеря или поломка личных вещей
            </li>
            <li className='sectionFoto__elem'>
              Порванная или грязная одежда
            </li>
          </ul>
        </section>
      </article>
      <div className='title-container bullying__container'>
        <h2 className='page-title'>
          За что дети травят друг друга? Причины буллинга
        </h2>
        <p className='page-title__text'>
        Какие дети больше других подвержены буллингу и какие особенности
        их поведения и внешнего вида могут спровоцировать агрессию?
        </p>
      </div>
      <div className='section__subtitle section__subtitle--bullying'>
        физиологические причины
      </div>
      <ul className='sectionList sectionList--foto sectionList--bullying'>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-1.png`}
            />
          </picture>
          <p>
            Лишний вес
          </p>
        </li>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-2.png`}
            />
          </picture>
          <p>
            Специфическая внешность
          </p>
        </li>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-3.png`}
            />
          </picture>
          <p>
            Проблемная кожа, дефекты на коже или лице
          </p>
        </li>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-4.png`}
            />
          </picture>
          <p>
            Проблемы с осанкой
          </p>
        </li>
      </ul>
      <div className='section__subtitle section__subtitle--bullying'>
      Заболевания, которые влияют на социальное взаимодействие ребенка
      </div>
      <ul className='sectionList sectionList--foto sectionList--bullying'>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-5.png`}
            />
          </picture>
          <p>
            Ветрянка, аллергия
          </p>
        </li>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-6.png`}
            />
          </picture>
          <p>
            Вши
          </p>
        </li>
      </ul>
      <div className='section__subtitle section__subtitle--bullying'>
        психологические особенности
      </div>
      <ul className='sectionList sectionList--foto sectionList--bullying'>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-7.png`}
            />
          </picture>
          <p>
            Беззащитность, неготовность постоять за себя
          </p>
        </li>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-8.png`}
            />
          </picture>
          <p>
            Повышенная агрессивность
          </p>
        </li>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-9.png`}
            />
          </picture>
          <p>
            Низкая самооценка, депрессивность, комплекс неполноценности
          </p>
        </li>
        <li className='sectionList-elem'>
          <picture>
            <img
              alt='буллинг'
              src={`${window.env.apiHost}/images/bicon-10.png`}
            />
          </picture>
          <p>
            Неумение общаться со сверстниками, одиночество
          </p>
        </li>
      </ul>
      <div className='question'>
        Остались вопросы? Ответит интерактивный консультант.
        <a
          className='section__link'
          data-screen='consultant'
          href='/'
          onClick={(evt) => props.selectScreen(evt)}
          title='Задать вопрос'
          >
          Задать вопрос
        </a>
      </div>
    </div>
  </div>
);

export default Bullying;
