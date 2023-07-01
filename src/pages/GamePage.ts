import { InitGlobalState } from '../state';

export const GamePage = () => {
  const node = document.createElement('div');
  const activeLvl = InitGlobalState.getLvl();
  console.log(activeLvl);

  node.className = 'class';
  node.innerHTML = `Страница игры уровня сложности ${InitGlobalState.getLvl()}`;
  return node;
};
