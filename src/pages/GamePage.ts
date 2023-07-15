import { Cards } from '../components/Cards';
import { Header } from '../components/Header';

export const GamePage = () => {
  const node = document.createDocumentFragment();

  node.appendChild(Header());
  node.appendChild(Cards());

  return node;
};
