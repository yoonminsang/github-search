import Component from '@/lib/component';
import githubStore from '@/store/github-store';
import localGithubStore from '@/store/local-github-store';
import { customSort } from '@/utils/custom-sort';
import Input from '../common/input';
import './style.css';

interface IState {
  search: string;
}

class Search extends Component {
  state!: IState;

  setup() {
    this.state = {
      search: '',
    };
  }

  markup() {
    let iconClass = 'icon search';
    iconClass += `${this.state.search ? '-black' : '-grey'}`;
    return /* html */ `
    <form class="search-form">
      <div class="flex">
        <inside class="input-inside"></inside>
        <button class="${iconClass}" type="submit"></button>
      </div>
    </form>
    `;
  }

  appendComponent(target: HTMLElement | DocumentFragment) {
    const $input = target.querySelector('.input-inside') as HTMLElement;
    new Input($input, {
      placeholder: '검색어를 입력하세요',
      required: true,
      value: this.state.search,
      class: 'input-search full-width',
      type: 'text',
    });
  }

  setEvent() {
    this.addEvent('submit', '.search-form', async (e: Event) => {
      e.preventDefault();
      const { search } = this.state;
      const encodeSearch = encodeURIComponent(search);
      if (this.props.local) {
        localGithubStore.getUserList(search);
      } else {
        githubStore.getUserList(encodeSearch);
      }
    });
    this.addEvent('input', '.input-search', (e: Event) => {
      const target = e.target as HTMLInputElement;
      this.setState({ search: target.value });
    });
  }
}

export default Search;
