import Router from './lib/router';
import MainPage from './pages/main';
import NotFoundPage from './pages/not-found-page';
import { IRoute } from './types';

class App {
  target: HTMLElement;
  routes: IRoute[];
  NotFoundPage: any;

  constructor(target: HTMLElement) {
    this.target = target;
    this.routes = [{ path: '/', component: MainPage }];
    this.NotFoundPage = NotFoundPage;
    this.render();
  }

  render() {
    new Router(this.target, this.routes, this.NotFoundPage);
  }
}

export default App;
