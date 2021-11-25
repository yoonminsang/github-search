import { IUser } from '@/types/user';
import { customSort } from '@/utils/custom-sort';
import LocalStore from './local-store';

interface IState {
  userList: null | IUser[];
  currentUserList: null | IUser[];
}

const USERLIST = 'userList';

class LocalGithubStore extends LocalStore {
  state: IState;

  constructor() {
    super();
    this.state = { userList: null, currentUserList: null };
  }

  public getAllUserList() {
    this.getLocalStorage(USERLIST, []);
    this.setState({ currentUserList: [...(this.state.userList as IUser[])] });
  }

  public getUserList(search: string) {
    const nextCurrentUserList: IUser[] = [];
    this.state.userList?.forEach((v: IUser) => {
      const { login } = v;
      const reg = new RegExp(search, 'gi');
      if (reg.test(login)) {
        nextCurrentUserList.push(v);
      }
    });
    this.setState({ currentUserList: nextCurrentUserList });
  }

  public addFavoriteUserList(user: IUser) {
    if (!this.state.userList) {
      return;
    }
    const userList = [...this.state.userList, { ...user, favorite: true }];
    userList.sort((a: IUser, b: IUser) => customSort(a.login, b.login));
    this.setLocalStorage(USERLIST, userList);
    this.setState({ currentUserList: userList });
  }

  public removeFavoriteUserList(user: IUser) {
    if (!this.state.userList || !this.state.currentUserList) {
      return;
    }
    const userList = this.state.userList.filter(({ login }) => login !== user.login);
    const currentUserList = this.state.currentUserList.filter(({ login }) => login !== user.login);
    this.setLocalStorage(USERLIST, userList);
    this.setState({ currentUserList });
  }
}

export default new LocalGithubStore();
