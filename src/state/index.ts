import { FINAL_ROUTE } from '../utils';
import { getTime } from '../fn/fn';
import { openPage } from '../index';

export interface ICard {
  suit: string;
  value: string;
}
class GlobalState {
  lvl: number;
  startTime: Date | null;
  endTime: Date | null;
  interval: NodeJS.Timer | null;
  selectedCards: HTMLDivElement[];
  userCards: ICard[];

  constructor() {
    this.lvl = 0;
    this.startTime = null;
    this.endTime = null;
    this.interval = null;
    this.selectedCards = [];
    this.userCards = [];
  }

  resetGame() {
    this.startTime = null;
    this.endTime = null;
    this.interval = null;
    this.selectedCards = [];
    this.userCards = [];
  }

  selectCard(card: HTMLDivElement) {
    if (this.selectedCards.length === 2) {
      if (
        card.dataset.suit &&
        card.dataset.value &&
        this.selectedCards[0].dataset.suit ===
          this.selectedCards[1].dataset.suit &&
        this.selectedCards[0].dataset.value ===
          this.selectedCards[1].dataset.value
      ) {
        this.userCards.push({
          suit: card.dataset.suit,
          value: card.dataset.value,
        });
      } else {
        this.selectedCards[0].classList.add('active');
        this.selectedCards[1].classList.add('active');
      }
      this.selectedCards = [];
    }
    this.selectedCards.push(card);
    console.log(this.selectedCards, ' this.selectedCards');
    console.log(this.userCards, ' this.userCards');

    if (
      this.userCards.length === this.getLvl() * 3 - 1 &&
      card.dataset.suit &&
      card.dataset.value &&
      this.selectedCards[1] &&
      this.selectedCards[0].dataset.suit ===
        this.selectedCards[1].dataset.suit &&
      this.selectedCards[0].dataset.value ===
        this.selectedCards[1].dataset.value
    ) {
      openPage(FINAL_ROUTE);
    }
  }
  getLvl() {
    return this.lvl;
  }
  setLvl(num: number) {
    this.lvl = num;
  }
  startTimer() {
    this.startTime = new Date();
    return this.startTime;
  }
  endTimer() {
    this.startTime = null;
    this.interval && clearInterval(this.interval);
    this.endTime = new Date();
    return this.endTime;
  }
  initTimer() {
    this.startTime = new Date();

    this.interval = setInterval(() => {
      if (this.startTime !== null) {
        const sec = document.querySelector('.header .sec');
        const min = document.querySelector('.header .min');
        const end = new Date();
        const timer = getTime(this.startTime, end);

        if (sec && min) {
          sec.innerHTML = timer.sec.toString();
          min.innerHTML = timer.min.toString();
        }
      }
    }, 1000);
    return this.interval;
  }
}

export const InitGlobalState = new GlobalState();
