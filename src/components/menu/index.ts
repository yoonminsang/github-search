import Component from '@/lib/component';
import { useHistory } from '@/lib/routerHooks';
import './style.css';

class Menu extends Component {
  markup() {
    const history = useHistory();
    const menuList = [
      { name: 'API', pathname: '/' },
      { name: '로컬', pathname: '/local' },
    ];
    return /* html */ `
    <div class="flex full-width menu">
      ${menuList
        .map(({ name, pathname }) => {
          const selected = pathname === history.pathname;
          return `<a href=${pathname} ${selected ? 'class="selected"' : ''}>${name}</a>`;
        })
        .join('')}
    </div>
    `;
  }
}

export default Menu;
