import "@babel/polyfill";
import $ from 'jquery';
import 'what-input';

import { hydrate } from './api';
import Applet from './Applet';
import Form from './Form';

import { displayError, hideError } from './alert';

// FOUNDATION
window.jQuery = $;
require('foundation-sites');
$(document).foundation();

// APP
(() => {
  let applet = new Applet();
  let form   = new Form(applet);

  // Hydrate
  (async () => {
    applet.setData(await hydrate());
    form.watchAnswers();
  })();
})();
