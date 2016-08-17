import assert = require('power-assert');
import Rx = require('rxjs');
import { stateFn } from '../store/index';
import { AddCommentAction, Action } from '../actions/action';

describe ('store test.', () => {
  it('should create a new comment', () => {
    const actions = new Rx.Subject<Action>();
    const states = stateFn([], actions);
    actions.next(new AddCommentAction({ id: 1, text: 'text', author: 'author' }));
    actions.next(new AddCommentAction({ id: 2, text: 'foo', author: 'bar' }));
    states.subscribe(s => {
      assert.equal(s.length, 2);
      assert.deepEqual(s[0], {
        id: 1, text: 'text', author: 'author',
      });
      assert.deepEqual(s[1], {
        id: 2, text: 'foo', author: 'bar',
      });
    });
  });
});
