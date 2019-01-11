import $ from 'jquery';
import handlebars from 'handlebars/dist/handlebars';

export default class {
  constructor() {
    this.questionTemplate = handlebars.compile($('#question-template').html());
    this.questionBlock    = $('#question-display');

    this.data = {
      question:  null,
      questions: [],
      answers:   [],
    };
  }

  render() {
    this.questionBlock.html(this.questionTemplate(this.data));
  }

  setQuestion(question) {
    if(question) {
      this.data.question = question;
    } else {
      this.data.question = this.data.questions[0];
    }
    this.setAnswers(this.data.question);
  }

  nextQuestion() {
    if(!this.data.question) return this.setQuestion();
    const index = this.data.questions.indexOf(this.data.question);
    if(index === -1) return;
    if(index + 2 >= this.data.questions.length) return;
    this.setQuestion(this.data.questions[index + 1]);
    this.render();
  }

  setAnswers(question) {
    question.answers = this.data.answers;
  }

  setData(data) {
    this.data = data;
    this.setQuestion();
    this.render();
  }
}
