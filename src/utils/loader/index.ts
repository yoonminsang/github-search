import Loader from '@/components/loader';

let requestCount = 0;

export const addLoader = () => {
  const $loader = document.querySelector('#loader') as HTMLElement;
  new Loader($loader);

  window.addEventListener('request', () => {
    requestCount++;
    $loader.classList.add('show');
  });

  window.addEventListener('request-end', () => {
    requestCount--;
    if (requestCount === 0) $loader.classList.remove('show');
  });
};
