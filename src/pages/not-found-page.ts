import Header from '@/components/common/header';
import NotFound from '@/components/not-found';
import Component from '@/lib/component';

class NotFoundPage extends Component {
  markup() {
    return /* html */ `
    <div class="wrapper">
      <inside class="header-inside"></inside>
      <inside class="not-found-inside"></inside>
    </div>
    `;
  }

  appendComponent(target: HTMLElement | DocumentFragment) {
    const $header = target.querySelector('.header-inside') as HTMLElement;
    const $notFound = target.querySelector('.not-found-inside') as HTMLElement;
    new Header($header);
    new NotFound($notFound);
  }
}

export default NotFoundPage;
