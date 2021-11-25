import Header from '@/components/common/header';
import SearchTemplate from '@/components/search-template';
import Component from '@/lib/component';

class LocalSearchPage extends Component {
  markup() {
    return /* html */ `
    <div class="wrapper">
      <inside class="header-inside"></inside>
      <inside class="search-template-inside"></inside>
    </div>
    `;
  }

  appendComponent(target: HTMLElement | DocumentFragment) {
    const $header = target.querySelector('.header-inside') as HTMLElement;
    const $githubSearch = target.querySelector('.search-template-inside') as HTMLElement;
    new Header($header);
    new SearchTemplate($githubSearch, { local: true });
  }
}

export default LocalSearchPage;
