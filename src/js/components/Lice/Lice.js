// @flow

import React from 'react';

type Props = {
  selectScreen: (evt: EventTarget) => void,
};

const Lice = (props: Props) => (
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

      <div className='d-catalog-scheme d-catalog-scheme-i big-view'>
        <span className='area area-0'>Для кого предназначено средство?</span>
        <span className='area area-1'>Для беременных и кормящих и детей с 1 года</span>
        <span className='area area-2'>Для девочек с 3-х лет</span>
        <span className='area area-3'>Для мальчиков с 3-х лет</span>
        <span className='area area-4'>С длинными и густыми волосами</span>
        <span className='area area-5'>С короткими или средней длинны волосами</span>
      </div>

      <div className='catalog-items big-view'>
        <div className='catalog-item'>
          <span className='img'>
            <span className='item-label-sect label-sens d-hide-xs'>Паранит Сенситив</span>
            <i><img src={`${window.env.apiHost}/images/04.jpg`} alt='Паранит Сенситив' /></i>
          </span>
          <span className='caption'>
            <span>Без вычёсывания</span>
          </span>
        </div>
        <div className='catalog-item'>
          <span className='img'>
            <span className='item-label-sect label-shampoo d-hide-xs'>Паранит Шампунь</span>
            <i><img src={`${window.env.apiHost}/images/site_product_01 (1).png`} alt='Паранит Шампунь'/></i>
          </span>
          <span className='caption'>
            <span>Просто, как вымыть голову</span>
          </span>
        </div>
        <div className='catalog-item'>
          <span className='img'>
            <span className='item-label-sect label-spray d-hide-xs'>Паранит Спрей</span>
            <i><img src={`${window.env.apiHost}/images/site_product_01 (2).png`} alt='Паранит Спрей'/></i>
          </span>
          <span className='caption'>
            <span>Быстро: обработка за 15 минут</span>
          </span>
        </div>
        <div className='catalog-item'>
          <span className='img'>
            <span className='item-label-sect label-losion d-hide-xs'>Паранит Лосьон</span>
            <i><img src={`${window.env.apiHost}/images/site_product_01 (3).png`} alt='Паранит Лосьон' /></i>
          </span>
          <span className='caption'>
            <span>Недорого и эффективно</span>
          </span>
        </div>
        <div className='catalog-item'>
          <span className='img'>
            <span className='item-label-sect d-hide-xs'>Паранит Кондиционер</span>
            <i><img src={`${window.env.apiHost}/images/kond_1.png`} alt='Шампунь-Кондиционер . Уход после обработки.'/></i>
          </span>
          <span className='caption'>
            <span>Легко смывает спрей и лосьон</span>
          </span>
        </div>
      </div>

      <div className='d-catalog-scheme-xs d-show-xs small-view'>
        <div className='area area-0'><div>Для кого предназначено средство?</div></div>
        <div className='area area-1'><div>Для девочек с 3-х лет <span>С короткими или средней длинны волосами</span></div></div>
        <div className='d-catalog-scheme-items'>
          <div className='d-cell-item'>
            <div ><i className='ico-spray' />ПАРАНИТ Спрей</div>
          </div>
          <div className='d-cell-item'>
            <div ><i className='ico-shampoo' />ПАРАНИТ Шампунь</div>
          </div>
          <div className='d-cell-item'>
            <div><i className='ico-losion' />ПАРАНИТ Лосьон</div>
          </div>
        </div>
        <div className='area area-2'><div>Для девочек с 3-х лет <span>С длинными и густыми волосами</span></div></div>
        <div className='d-catalog-scheme-items'>
          <div className='d-cell-item'>
            <div><i className='ico-sens' />ПАРАНИТ Сенситив</div>
          </div>
        </div>
        <div className='area area-3'><div>Для мальчиков с 3-х лет <span>С короткими или средней длинны волосами</span></div></div>
        <div className='d-catalog-scheme-items'>
          <div className='d-cell-item'>
            <div ><i className='ico-spray' />ПАРАНИТ Спрей</div>
          </div>
          <div className='d-cell-item'>
            <div ><i className='ico-shampoo' />ПАРАНИТ Шампунь</div>
          </div>
          <div className='d-cell-item'>
            <div ><i className='ico-losion' />ПАРАНИТ Лосьон</div>
          </div>
        </div>
        <div className='area area-4'><div>Для беременных и кормящих и детей с 1 года</div></div>
        <div className='d-catalog-scheme-items'>
          <div className='d-cell-item'>
            <div ><i className='ico-sens' />ПАРАНИТ Сенситив</div>
          </div>
        </div>
      </div>
      <div className='catalog-items small-view'>
        <div className='catalog-item'>
          <span className='item-label'>Паранит Сенситив</span>
          <span className='caption'>Без вычёсывания</span>
        </div>
        <div className='catalog-item'>
          <span className='item-label'>Паранит Шампунь</span>
          <span className='caption'>Просто, как вымыть голову</span>
        </div>
        <div className='catalog-item'>
          <span className='item-label'>Паранит Спрей</span>
          <span className='caption'>Быстро: обработка за 15 минут</span>
        </div>
        <div className='catalog-item'>
          <span className='item-label'>Паранит Лосьон</span>
          <span className='caption'>Недорого и эффективно</span>
        </div>
        <div className='catalog-item'>
          <span className='item-label'>Паранит Кондиционер</span>
          <span className='caption'>Легко смывает спрей и лосьон</span>
        </div>
      </div>

      <div className='question--link'>
        <a
          className='section__link'
          data-screen='consultant'
          href='http://vsham.net/?utm_source=dnevnik&utm_medium=article'
          onClick={()=> {
            gtag('event', 'Кнопка Клик', { 'event_category': 'Кнопка', 'event_action': 'Клик', });
          }}
          
          title='Узнать больше'
          >
          Узнать больше
        </a>
      </div>
    </div>
  </div>
);

export default Lice;
