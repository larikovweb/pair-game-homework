import './styles/index.scss';
import './assets/fonts/stratosskyengweb-regular.woff';
import './assets/fonts/stratosskyengweb-regular.woff2';
import { LvlPage, GamePage } from './pages';
import { GAME_ROUTE, MAIN_ROUTE } from './utils';
import { Header } from './components/Header';

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
