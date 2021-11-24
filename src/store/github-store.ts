import Observable from '@/lib/basic-observable';
import { IUser } from '@/types/user';
import { searchUserList } from '@/utils/api/user';
import { customSort } from '@/utils/custom-sort';

class GithubStore extends Observable {
  constructor() {
    super();
    this.state = { userList: null };
  }

  async getGithubUsers(search: string) {
    try {
      const {
        data: { items: userList },
      } = await searchUserList({ search });
      userList.sort((a: IUser, b: IUser) => customSort(a.login, b.login));
      this.setState({ userList });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new GithubStore();
