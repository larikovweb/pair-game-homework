import { InitGlobalState } from '../state';

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
  InitGlobalState.initTimer();
  node.querySelector('.header__btn')?.addEventListener('click', () => {
    clearInterval(InitGlobalState.initTimer());
  });
  return node;
};
