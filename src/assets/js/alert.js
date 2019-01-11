import $ from 'jquery';

const SUCCESS_CALLOUT = '#success-callout';
const SUCCESS_TEXT = '#success-callout';
const ERROR_CALLOUT = '#error-callout';
const ERROR_TEXT = '#error-callout';

export const displayError = text => {
  $(ERROR_TEXT).text(text);
  $(ERROR_CALLOUT).show();
};

export const hideError = () => {
  $(ERROR_CALLOUT).hide();
};

export const displaySuccess = text => {
  $(SUCCESS_TEXT).text(text);
  $(SUCCESS_CALLOUT).show();
};

export const hideSuccess = () => {
  $(SUCCESS_CALLOUT).hide();
};
