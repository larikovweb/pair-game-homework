import { openPage } from '../index';
import { Modal } from '../components/Modal';
import { GAME_ROUTE } from '../utils';
import { InitGlobalState } from '../state';

export const LvlPage = () => {
  const node = document.createElement('div');
  node.className = 'modal__lvls';
  node.innerHTML = `
    <li>1</li>
    <li>2</li>
    <li>3</li>
  `;

  const items = node?.querySelectorAll('li');

  items.forEach((item, i, arr) => {
    item.addEventListener('click', () => {
      arr.forEach((item) => item.classList.remove('active'));
      item.classList.add('active');
      InitGlobalState.setLvl(i + 1);
    });
  });

  const onClick = () => {
    if (InitGlobalState.getLvl() === 0) {
      alert('Выбери сложность');
      return;
    }

    openPage(GAME_ROUTE);
  };

  return Modal('Выбери сложность', node, {
    text: 'Старт',
    onClick: onClick,
  });
};
