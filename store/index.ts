import { AddCommentAction, Action } from '../actions/action';
import { Comment } from '../interfaces/comment';
import { Observable, BehaviorSubject } from 'rxjs';
import { comments } from './comments';

export function stateFn(initState: Comment[], actions: Observable<Action>): Observable<Comment[]> {
  const appStateObs = comments(initState, actions);
  return wrapIntoBehavior(initState, appStateObs);
}

function wrapIntoBehavior(init, obs) {
  const res = new BehaviorSubject(init);
  obs.subscribe(s => res.next(s));
  return res;
}
