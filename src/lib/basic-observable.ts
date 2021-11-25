import { IObject } from '@/types';

abstract class Observable {
  observers: Function[];
  state: IObject;

  constructor() {
    this.observers = [];
    this.state = {};
  }

  public setState(nextState: object, cb?: Function) {
    this.state = { ...this.state, ...nextState };
    this.notify();
    if (cb) {
      cb();
    }
  }

  public subscribe(observer: Function) {
    observer();
    this.observers.push(observer);
  }

  public unsubscribe(observer: Function) {
    this.observers = [...this.observers].filter((subscriber) => subscriber !== observer);
  }

  public unsubscribeAll() {
    this.observers = [];
  }

  private notify() {
    this.observers.forEach((observer) => observer());
  }
}

export default Observable;
