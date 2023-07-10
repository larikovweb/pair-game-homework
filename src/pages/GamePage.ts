import { Header } from '../components/Header';
import { InitGlobalState } from '../state';

export const GamePage = () => {
  const node = document.createElement('div');
  const activeLvl = InitGlobalState.getLvl();
  console.log(activeLvl);

  node.className = 'class';
  node.appendChild(Header());

  return node;
};
