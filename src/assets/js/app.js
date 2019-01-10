import "@babel/polyfill";
import $ from 'jquery';
import 'what-input';

import { hydrate } from './api';
import Applet from './Applet';
import Form from './Form';

import { displayError, hideError } from './error';

// FOUNDATION
window.jQuery = $;
require('foundation-sites');
$(document).foundation();

// APP
(() => {
  let form   = new Form()
  let applet = new Applet();

  // Hydrate
  (async () => {
    applet.setData(await hydrate());
    form.watchAnswers();
  })();
})();
