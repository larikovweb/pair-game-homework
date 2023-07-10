import { shuffle } from '../fn/fn';
import { InitGlobalState } from '../state';
import { Card } from './Card';

export const Cards = () => {
  const node = document.createElement('div');
  node.className = 'cards';
  const activeLvl = InitGlobalState.getLvl();
  const cardsCount = activeLvl * 6;
  node.style.gridTemplateColumns = `repeat(${cardsCount / 3}, 1fr)`;
  const shuffleCards: { suit: string; value: string }[] = [];
  shuffle(cardsData)
    .filter((_, i) => i < cardsCount / 2)
    .forEach((card) => {
      shuffleCards.push(card);
      shuffleCards.push(card);
    });
  shuffle(shuffleCards).forEach((card) => {
    node.appendChild(Card(card.suit, card.value));
  });

  return node;
};

export const cardsData = [
  {
    suit: 'diamond',
    value: '6',
  },
  {
    suit: 'diamond',
    value: '7',
  },
  {
    suit: 'diamond',
    value: '8',
  },
  {
    suit: 'diamond',
    value: '9',
  },
  {
    suit: 'diamond',
    value: '10',
  },
  {
    suit: 'diamond',
    value: 'J',
  },
  {
    suit: 'diamond',
    value: 'Q',
  },
  {
    suit: 'diamond',
    value: 'K',
  },
  {
    suit: 'diamond',
    value: 'A',
  },
  {
    suit: 'peak',
    value: '6',
  },
  {
    suit: 'peak',
    value: '7',
  },
  {
    suit: 'peak',
    value: '8',
  },
  {
    suit: 'peak',
    value: '9',
  },
  {
    suit: 'peak',
    value: '10',
  },
  {
    suit: 'peak',
    value: 'J',
  },
  {
    suit: 'peak',
    value: 'Q',
  },
  {
    suit: 'peak',
    value: 'K',
  },
  {
    suit: 'peak',
    value: 'A',
  },
  {
    suit: 'spade',
    value: '6',
  },
  {
    suit: 'spade',
    value: '7',
  },
  {
    suit: 'spade',
    value: '8',
  },
  {
    suit: 'spade',
    value: '9',
  },
  {
    suit: 'spade',
    value: '10',
  },
  {
    suit: 'spade',
    value: 'J',
  },
  {
    suit: 'spade',
    value: 'Q',
  },
  {
    suit: 'spade',
    value: 'K',
  },
  {
    suit: 'spade',
    value: 'A',
  },
  {
    suit: 'hearts',
    value: '6',
  },
  {
    suit: 'hearts',
    value: '7',
  },
  {
    suit: 'hearts',
    value: '8',
  },
  {
    suit: 'hearts',
    value: '9',
  },
  {
    suit: 'hearts',
    value: '10',
  },
  {
    suit: 'hearts',
    value: 'J',
  },
  {
    suit: 'hearts',
    value: 'Q',
  },
  {
    suit: 'hearts',
    value: 'K',
  },
  {
    suit: 'hearts',
    value: 'A',
  },
];
