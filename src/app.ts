import Router from './lib/router';
import GithubSearchPage from './pages/github-search-page';
import LocalSearchPage from './pages/local-search-page';
import NotFoundPage from './pages/not-found-page';
import localGithubStore from './store/local-github-store';
import { IRoute } from './types/route';
import { addLoader } from './utils/loader';

class App {
  target: HTMLElement;
  routes: IRoute[];
  NotFoundPage: any;

  constructor(target: HTMLElement) {
    this.target = target;
    this.routes = [
      { path: '/', component: GithubSearchPage },
      { path: '/local', component: LocalSearchPage },
    ];
    this.NotFoundPage = NotFoundPage;
    this.init();
    this.render();
  }

  render() {
    new Router(this.target, this.routes, this.NotFoundPage);
  }

  init() {
    addLoader();
    localGithubStore.getUserList();
  }
}

export default App;
