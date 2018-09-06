// @flow

import React from 'react';

const Lice = () => (
  <div className='lice'>
    <div className='container'>

      <div className='title-container lice__container'>
        <h2 className='page-title'>
          как защитить себя и ребенка от вшей?
        </h2>
      </div>

      <div className='full-paper'>
        <div className='section__subtitle section__subtitle--lice'>
          что нужно знать о вшах?
        </div>
        <ul className='sectionList sectionList--foto sectionList--lice'>
          <li className='sectionList-elem'>
            <picture>
              <img
                alt='буллинг'
                src={`${window.env.apiHost}/images/l-icon-1.png`}
              />
            </picture>
            <p>
              В последние 10 лет в Москве заболевают педикулезом в 5 раз чаще!
            </p>
          </li>
          <li className='sectionList-elem'>
            <picture>
              <img
                alt='буллинг'
                src={`${window.env.apiHost}/images/l-icon-2.png`}
              />
            </picture>
            <p>
              Вши не умеют прыгать и летать, поэтому подхватить заразу, просто проходя мимо человека, невозможно
            </p>
          </li>
          <li className='sectionList-elem'>
            <picture>
              <img
                alt='буллинг'
                src={`${window.env.apiHost}/images/l-icon-3.png`}
              />
            </picture>
            <p>
              Вши живут на волосистой части головы и питаются кровью
            </p>
          </li>
          <li className='sectionList-elem'>
            <picture>
              <img
                alt='буллинг'
                src={`${window.env.apiHost}/images/l-icon-4.png`}
              />
            </picture>
            <p>
              Попадая на кожу головы, вши начинают активно размножаться
            </p>
          </li>
          <li className='sectionList-elem'>
            <picture>
              <img
                alt='буллинг'
                src={`${window.env.apiHost}/images/l-icon-5.png`}
              />
            </picture>
            <p>
              99% происходит при контакте «голова к голове»
            </p>
          </li>
          <li className='sectionList-elem'>
            <picture>
              <img
                alt='буллинг'
                src={`${window.env.apiHost}/images/l-icon-6.png`}
              />
            </picture>
            <p>
              Вшами нельзя заразиться от животных
            </p>
          </li>
        </ul>
      </div>

      <div className='section__subtitle section__subtitle--lice'>
        чем опасен педикулез?
      </div>

      <article className='lice-article'>
        <section className='sectionFoto'>
          <picture>
            <img
              alt='Буллинг'
              src={`${window.env.apiHost}/images/l1.png`}
            />
          </picture>
          <ul className='sectionFoto__sublist'>
            <li className='sectionFoto__elem'>
            Ухудшает общее самочувствие
            </li>
            <li className='sectionFoto__elem'>
              Ребенок становится нервным и беспокойным
            </li>
            <li className='sectionFoto__elem'>
              Формирует психологические комплексы
            </li>
          </ul>
        </section>
        <section className='sectionFoto'>
          <picture>
            <img
              alt='Буллинг'
              src={`${window.env.apiHost}/images/l2.png`}
            />
          </picture>
          <ul className='sectionFoto__sublist'>
            <li className='sectionFoto__elem'>
              Вызывает зуд кожи головы
            </li>
            <li className='sectionFoto__elem'>
              Открывает ворота инфекции в результате расчесывания мест укусов
            </li>
            <li className='sectionFoto__elem'>
              Провоцирует развитие гнойничковых заболеваний
            </li>
          </ul>
        </section>
      </article>

      <div className='title-container lice__container lice__container--wider'>
        <h2 className='page-title'>
          Как избежать заражения?
        </h2>
        <p className='page-title__text'>
          Лето и первый месяц после каникул — период вспышек педикулеза
           и повышенного риска заражения. Соблюдайте несложные меры профилактики,
           чтобы обезопасить себя от вшей
        </p>
      </div>

      <ul className='sectionList'>
        <li className='sectionList-elem'>
          Регулярно осматривайте голову ребенка
        </li>
        <li className='sectionList-elem'>
          В гостях или общественных местах не прикасайтесь головой к подушкам
        </li>
        <li className='sectionList-elem'>
          Следите, чтобы у ребенка была аккуратная прическа: мальчикам — короткие стрижки, девочкам — косы
        </li>
        <li className='sectionList-elem'>
          В местах большого скопления людей не ходите с распущенными волосами
        </li>
        <li className='sectionList-elem'>
          При посещении бассейна обязательно надевайте резиновую шапочку
        </li>
        <li className='sectionList-elem'>
          Используйте средства для профилактики педикулеза в домашних условиях
        </li>
        <li className='sectionList-elem'>
          Не пользуйтесь чужими расческами или наушниками
        </li>
        <li className='sectionList-elem'>
          В случае заражения — сразу же сообщите об этом в школе!
        </li>
        <li className='sectionList-elem'>
          Не меряйте чужие головные уборы, шарфы, куртки с капюшоном
        </li>
      </ul>

      <div className='title-container lice__container lice__container--wider'>
        <h2 className='page-title'>
          как подобрать средство?
        </h2>
        <p className='page-title__text'>
          Чтобы правильно подобрать средство от вшей, ответьте на несколько простых вопросов
        </p>
      </div>

    </div>
  </div>
);

export default Lice;
