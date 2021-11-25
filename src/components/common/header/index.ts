import Component from '@/lib/component';
import './style.css';

class Header extends Component {
  markup() {
    return /* html */ `
    <header class="header">
      <h1>
        <a href="/">Github Stars</a>
      </h1>
    </header>
    `;
  }
}

export default Header;
