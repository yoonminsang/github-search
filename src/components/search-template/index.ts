import Component from '@/lib/component';
import Menu from '@/components/menu';
import Search from '@/components/search';
import UserList from '../user-list';

class SearchTemplate extends Component {
  markup() {
    return /* html */ `
    <main class="search-template">
      <inside class="menu-inside"></inside>
      <inside class="search-inside"></inside>
      <inside class="user-list-inside"></inside>
    </main>
    `;
  }

  appendComponent(target: HTMLElement | DocumentFragment) {
    const $menu = target.querySelector('.menu-inside') as HTMLElement;
    const $search = target.querySelector('.search-inside') as HTMLElement;
    const $userList = target.querySelector('.user-list-inside') as HTMLElement;
    new Menu($menu);
    new Search($search);
    new UserList($userList);
  }
}

export default SearchTemplate;
