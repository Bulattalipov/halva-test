// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import burger from './modules/burger';

documenReady(() => {
  window.___YOUR_PROJECT___API = {};

  lazyIMages();
  initModal();
  burger();
});
