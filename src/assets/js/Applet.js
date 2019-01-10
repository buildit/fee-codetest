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

  setAnswers(question) {
    question.answers = this.data.answers;
  }

  setData(data) {
    this.data = data;
    this.setQuestion();
    this.render();
  }
}
