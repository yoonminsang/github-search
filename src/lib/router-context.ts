import { IObject } from '@/types';
import { getPathname, getQuery } from './utils';

interface IState {
  pathname: string;
  query: IObject;
  params: IObject;
  push: (pathname: string) => void;
  goBack: () => void;
}

class RouterContext {
  state: IState;

  constructor() {
    this.state = { pathname: getPathname(), query: getQuery(), params: {}, push: () => {}, goBack: () => {} };
  }

  public setState(nextState: object) {
    this.state = { ...this.state, ...nextState };
  }
}

export { RouterContext };
export default new RouterContext();
