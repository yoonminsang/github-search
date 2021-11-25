import { IUser } from '@/types/user';
import { customSort } from '@/utils/custom-sort';
import LocalStore from './local-store';

interface IState {
  userList: null | IUser[];
}

const USERLIST = 'userList';

class LocalGithubStore extends LocalStore {
  state: IState;

  constructor() {
    super();
    this.state = { userList: null };
  }

  public getUserList() {
    this.getLocalStorage(USERLIST, []);
  }

  public addFavoriteUserList(user: IUser) {
    if (!this.state.userList) {
      return;
    }
    const userList = [...this.state.userList, { ...user, favorite: true }];
    userList.sort((a: IUser, b: IUser) => customSort(a.login, b.login));
    this.setLocalStorage(USERLIST, userList);
  }

  public removeFavoriteUserList(user: IUser) {
    if (!this.state.userList) {
      return;
    }
    const userList = this.state.userList.filter(({ login }) => login !== user.login);
    this.setLocalStorage(USERLIST, userList);
  }
}

export default new LocalGithubStore();
