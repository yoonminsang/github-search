import Component from '@/lib/component';
import githubStore from '@/store/github-store';
import localGithubStore from '@/store/local-github-store';
import { IUser } from '@/types/user';
import { getHeader } from '@/utils/get-header';
import './style.css';

interface IState {
  userList: null | IUser[];
}

class UserList extends Component {
  state!: IState;

  setup() {
    this.state = { userList: null };
  }

  markup() {
    const { userList } = this.state;
    let prevHeader: string = '';
    return /* html */ `
    <ul class="user-list">
      ${
        userList
          ? userList.map(({ login, avatar_url, favorite }, index: number) => {
              let header: boolean = false;
              if (index === 0) {
                header = true;
                prevHeader = getHeader(login[0]);
              } else {
                const nextHeader = getHeader(login[0]);
                if (prevHeader !== nextHeader) {
                  header = true;
                  prevHeader = nextHeader;
                }
              }

              return /* html */ `
              ${header ? `<header class="user-header">${prevHeader}</header>` : ''}
              <li class="user flex">
                <div class="img avatar-url" style="background-image:url(${avatar_url})"></div>
                <div class="nickname">${login}</div>
                <button class="icon favorite${
                  favorite ? '' : '-border'
                } js-favorite" data-index=${index} data-favorite=${favorite}></button>
              </li>
                `;
            })
          : ''
      }
    </ul>
    `;
  }

  componentDidMount() {
    if (this.props.local) {
      localGithubStore.subscribe(() => this.setState({ userList: localGithubStore.state.currentUserList }));
    } else {
      githubStore.subscribe(() => this.setState({ userList: githubStore.state.userList }));
    }
  }

  setEvent() {
    // TODO: 컴포넌트 this.state 바인딩 문제
    const { userList: initialUserList } = this.state;
    this.addEvent('click', '.js-favorite', (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLButtonElement;
      const index = +(target.dataset.index as string);
      const favorite = target.dataset.favorite as string;
      const userList = !this.state ? (initialUserList as IUser[]) : (this.state.userList as IUser[]);
      const favoriteUser = userList[index];
      if (favorite === 'true') {
        localGithubStore.removeFavoriteUserList(favoriteUser);
      } else {
        localGithubStore.addFavoriteUserList(favoriteUser);
      }
    });
  }
}

export default UserList;
