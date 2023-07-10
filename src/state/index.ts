import { getTime } from '../fn/fn';

class GlobalState {
  lvl: number;
  startTime: Date | null;
  endTime: Date | null;

  constructor() {
    this.lvl = 0;
    this.startTime = null;
    this.endTime = null;
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
    this.endTime = new Date();
    return this.endTime;
  }
  initTimer() {
    let interval: NodeJS.Timer | null = null;
    this.startTime = new Date();
    if (this.startTime === null && interval !== null) {
      this.endTimer();
      clearInterval(interval);
      return;
    }
    interval = setInterval(() => {
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
    return interval;
  }
}

export const InitGlobalState = new GlobalState();
