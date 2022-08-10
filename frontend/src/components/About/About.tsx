import { FC } from 'react';

import './About.css';

const About: FC = () => {
  return (
    <div className={'about-container'}>
      <img src="/image-for-footer/img.png" alt={'khinkalnya'} />
      <div>
        <h2>Хінкальня — мережа душевних ресторанів грузинської кухні</h2>
        <p>
          Хінкальня™ — найбільша міжнародна мережа гостинних ресторанів із
          лаконічним меню хітів грузинської кухні, головною стравою якого є
          хінкалі — приправлені спеціями, соковиті м’ясні мішечки з тугого
          тіста.
        </p>
        <p>
          Хінкальня –&nbsp; це унікальний формат гостинного ресторану
          грузинської кухні, головна складова успіху якого – по-справжньому
          смачна та недорога їжа.
        </p>
        <p>
          Меню ресторану просте та зрозуміле: хінкалі, хачапурі трьох видів,
          страви з мангалу, харчо, багато овочів та зелені, домашнє вино.
        </p>
        <p>
          В основі фірмового стилю Хінкальні — старовинний візерунок грузинської
          вишивки, його елементи використані у дизайні меню та приміщення.
          Меблі-трансформери і зістарені ширми дозволяють швидко адаптувати
          місце під великі застільні компанії увечері та обідній варіант вдень.
        </p>
        <p>За 5 років роботи ми відкрили 70 ресторанів у 5 країнах світу. </p>
        <p>
          Якщо Ви бажаєте відкрити ресторан мережі Хінкальня у своєму місті{' '}
          <a href="http://www.khinkalnya.com/uk/fran/">
            на умовах франчайзингу
          </a>{' '}
          – звертайтесь за телефоном:
        </p>
        <p>+38&nbsp;093 148 80 96</p>
      </div>
    </div>
  );
};

export { About };
