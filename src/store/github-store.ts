import Observable from '@/lib/basic-observable';
import { IUser } from '@/types/user';
import { searchUserList } from '@/utils/api/user';
import { customSort } from '@/utils/custom-sort';
import localGithubStore from './local-github-store';

interface IState {
  userList: null | IUser[];
  localUserList: null | IUser[];
}

class GithubStore extends Observable {
  state: IState;
  constructor() {
    super();
    this.state = { userList: null, localUserList: null };
    this.init();
  }

  private init() {
    localGithubStore.subscribe(() =>
      this.setState({ localUserList: localGithubStore.state.userList }, () => this.applyFavorites(this.state.userList)),
    );
  }

  public async getUserList(search: string) {
    try {
      const {
        data: { items },
      } = await searchUserList({ search });
      this.applyFavorites(items);
    } catch (err) {
      console.error(err);
    }
  }

  private applyFavorites(items: any) {
    const { localUserList } = this.state;
    if (!localUserList || !items) return;
    const userList: IUser[] = items.map(({ login, avatar_url }: IUser) => {
      let favorite = false;
      for (let i = 0; i < localUserList.length; i++) {
        if (localUserList[i].login === login) {
          favorite = true;
          break;
        }
      }
      return { login, avatar_url, favorite };
    });
    userList.sort((a: IUser, b: IUser) => customSort(a.login, b.login));
    this.setState({ userList });
  }
}

export default new GithubStore();
