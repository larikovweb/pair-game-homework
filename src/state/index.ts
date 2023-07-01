class GlobalState {
  lvl: number;

  constructor() {
    this.lvl = 0;
  }
  getLvl() {
    return this.lvl;
  }
  setLvl(num: number) {
    this.lvl = num;
  }
}

export const InitGlobalState = new GlobalState();
