export const Card = (suit: string, value: string) => {
  const node = document.createElement('div');
  node.className = 'card';
  const getSuit = (suit: string): string => {
    switch (suit) {
      case 'diamond':
        return '♦';
      case 'peak':
        return '♠';
      case 'heart':
        return '♥';
      case 'spade':
        return '♣';
      default:
        return '♠';
    }
  };

  const getColor = (suit: string): string => {
    if (suit === 'diamond' || suit === 'heart') {
      return '#FF4545';
    }
    return '#000000';
  };

  node.style.color = getColor(suit);

  node.innerHTML = `
    <div class="card__head">
      <b>${value}</b>
      <i>${getSuit(suit)}</i>
    </div>
    <div class="card__body">
      ${getSuit(suit)}
    </div>
    <div class="card__foot">
      <b>${value}</b>
      <i>${getSuit(suit)}</i>
    </div>
  `;

  return node;
};
