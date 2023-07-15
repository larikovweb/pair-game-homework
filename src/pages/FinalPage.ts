import { openPage } from '../index';
import { Modal } from '../components/Modal';
import { MAIN_ROUTE } from '../utils';
import { InitGlobalState } from '../state';
import { getTime } from '../fn/fn';

export const FinalPage = () => {
  const node = document.createElement('div');
  node.className = 'modal__final';
  console.log(InitGlobalState.startTime, 'InitGlobalState.startTime');
  console.log(InitGlobalState.endTime, 'InitGlobalState.endTime');
  const time = getTime(InitGlobalState.startTime, new Date());
  node.innerHTML = `
    <span>Затраченное время:</span>
    <b>${time.min}:${time.sec}</b>
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
    InitGlobalState.resetGame();
    openPage(MAIN_ROUTE);
  };

  return Modal('Вы выиграли!', node, {
    text: 'Играть снова',
    onClick: onClick,
  });
};
