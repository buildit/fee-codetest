import handlebars from 'handlebars/dist/handlebars';
import sinon from 'sinon/lib/sinon.js';
import { assert, expect, should } from 'chai';

import Applet from './Applet';

describe('Applet', () => {
  describe('setAnswers', () => {
    it('should set answers on question', () => {
      const stub = sinon.stub(handlebars, 'compile').returns(null);

      const data = {
        question: {},
        answers: [
          { id: 1 },
          { id: 2 }
        ],
      };

      let applet = new Applet();

      applet.data = data;
      applet.setAnswers(data.question);

      // Assert style
      assert.strictEqual(applet.data.question.answers, data.answers);

      // Expect style
      expect(applet.data.question.answers).to.equal(data.answers);

      stub.reset();
    });
  })
})
