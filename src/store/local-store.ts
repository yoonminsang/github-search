import Observable from '@/lib/basic-observable';

abstract class LocalStore extends Observable {
  state: any;

  constructor() {
    super();
    this.state = {};
  }

  public setLocalStorage(key: string, value: any) {
    console.log('setLocalStorage', key, value);
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
    const nextState = { [key]: value };
    this.setState(nextState);
  }

  public getLocalStorage(key: string, initial: any) {
    const item = localStorage.getItem(key) as string;
    const parseItem: any = JSON.parse(item);
    // TODO: 인터페이스로 예외처리
    if (!parseItem) {
      this.setInitialLocalStorage(key, initial);
    } else {
      const nextState = { [key]: parseItem };
      this.setState(nextState);
    }
  }

  public setInitialLocalStorage(key: string, initial: any) {
    const stringifyInitial = JSON.stringify(initial);
    localStorage.setItem(key, stringifyInitial);
    const nextState = { [key]: stringifyInitial };
    this.setState(nextState);
  }
}

export default LocalStore;
