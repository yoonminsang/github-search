import axios from 'axios';
import Observable from '@/lib/basic-observable';
import { searchUser } from '@/utils/api/user';

class GithubStore extends Observable {
  constructor() {
    super();
    this.state = { userList: null };
  }

  async getGithubUsers(search: string) {
    try {
      const {
        data: { items: userList },
      } = await searchUser({ search });
      this.setState({ userList });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new GithubStore();
