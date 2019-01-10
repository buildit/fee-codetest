import $ from 'jquery';

const ERROR_CALLOUT = '#error-callout';
const ERROR_TEXT = '#error-callout';

export const displayError = text => {
  $(ERROR_TEXT).text(text);
  $(ERROR_CALLOUT).show();
};

export const hideError = () => {
  $(ERROR_CALLOUT).hide();
};
