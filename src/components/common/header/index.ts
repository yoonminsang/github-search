import axios from 'axios';
import Component from '@/lib/component';
import './style.css';

class Header extends Component {
  markup() {
    return /* html */ `
    <header class="header">
      <h1>Github Stars</h1>
    </header>
    `;
  }
}

export default Header;
