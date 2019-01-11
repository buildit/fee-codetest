import $ from 'jquery';

import {
  displaySuccess,
  hideSuccess,
  displayError,
  hideError,
} from './alert';

const BUTTON_ID = '#next-question';

export default class {
  constructor(applet) {
    this.applet = applet;
  }

  watchAnswers() {
    const self = this;
    this.answers = $('input[name=answers]');
    this.answers.change(function() { self.selectAnswer(this); });
  }

  selectAnswer(el) {
    hideError();
    hideSuccess();

    const id = el.id.split('-').length > 1 &&
               el.id.split('-')[1];
    if(!id) return;

    const answer = this.applet.data &&
                   this.applet.data.question &&
                   this.applet.data.question.answers &&
                   this.applet.data.question.answers.find(answer =>
                      answer.id === parseInt(id)
                   );

    if(!answer) return displayError('Invalid Answer');
    if(answer.isCorrect)
      displaySuccess('Correct Answer');
    else
      displayError('Incorrect Answer');

    this.setupButton();
  }

  setupButton() {
    const self = this;
    $(BUTTON_ID).show();
    $(BUTTON_ID).click(() => {
      self.applet.nextQuestion();
      self.watchAnswers();
      hideError();
      hideSuccess();
      $(BUTTON_ID).hide();
    });
  }
}
