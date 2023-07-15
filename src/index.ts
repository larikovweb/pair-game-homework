import './styles/index.scss';
import './assets/fonts/stratosskyengweb-regular.woff';
import './assets/fonts/stratosskyengweb-regular.woff2';
import { LvlPage, GamePage, FinalPage } from './pages';
import { FINAL_ROUTE, GAME_ROUTE, MAIN_ROUTE } from './utils';

const app = document.getElementById('app');

const routes: {
  path: string;
  component: () => HTMLElement | DocumentFragment;
}[] = [
  {
    path: MAIN_ROUTE,
    component: LvlPage,
  },
  {
    path: GAME_ROUTE,
    component: GamePage,
  },
  {
    path: FINAL_ROUTE,
    component: FinalPage,
  },
];

export const openPage = (path: string) => {
  const page = routes.find((route) => route.path === path);
  if (page && app) {
    app.innerHTML = '';
    app.appendChild(page.component());
  } else {
    console.error('Page not found');
  }
};

app?.appendChild(LvlPage());
