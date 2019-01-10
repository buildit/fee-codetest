import $ from 'jquery';

export default class {
  watchAnswers() {
    this.answers = $('input[name=answers]');
    this.answers.change(this.selectAnswer);
  }

  selectAnswer() {
    // this is a jQuery object
    console.log(this.id)
  }
}
