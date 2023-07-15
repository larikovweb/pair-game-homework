import { GAME_ROUTE, TIMER_FOR_START_GAME } from '../utils';
import { InitGlobalState } from '../state';
import { openPage } from '../index';

export const Header = () => {
  const node = document.createElement('header');
  node.className = 'header';

  node.innerHTML = `
      <div class="header__timer">
        <div class="header__block">
          <span>min</span>
          <b class="min">00</b>
        </div>
        <div class="header__block"><b>.</b></div>
        <div class="header__block">
          <span>sec</span>
          <b class="sec">00</b>
        </div>
      </div>
      <button class="header__btn btn">Начать заново</button>
  `;

  InitGlobalState.endTimer();

  setTimeout(() => {
    InitGlobalState.initTimer();
  }, TIMER_FOR_START_GAME);

  node.querySelector('.header__btn')?.addEventListener('click', () => {
    clearInterval(InitGlobalState.initTimer());
    openPage(GAME_ROUTE);
  });
  return node;
};
