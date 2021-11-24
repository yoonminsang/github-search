import Header from '@/components/common/header';
import Component from '@/lib/component';

class LocalSearchPage extends Component {
  markup() {
    return /* html */ `
    <div class="wrapper">
      <inside class="header-inside"></inside>
      로컬 페이지
    </div>
    `;
  }

  appendComponent(target: any) {
    const $header = target.querySelector('.header-inside');
    new Header($header);
  }
}

export default LocalSearchPage;
