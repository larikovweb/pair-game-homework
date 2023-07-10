import { Cards } from '../components/Cards';
import { Header } from '../components/Header';
import { InitGlobalState } from '../state';

export const GamePage = () => {
  const node = document.createDocumentFragment();
  const activeLvl = InitGlobalState.getLvl();
  console.log(activeLvl);

  node.appendChild(Header());
  node.appendChild(Cards());

  return node;
};
