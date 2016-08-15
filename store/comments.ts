import { AddCommentAction, Action } from '../actions/action';
import { Comment } from '../interfaces/comment';
import { Observable } from 'rxjs';

export function comments(initState: Comment[], actions: Observable<Action>): Observable<Comment[]> {
  return actions.scan((state: Comment[], action: Action) => {
    if (action instanceof AddCommentAction) {
      const { id, text, author } = action.payload;
      const newComment = { id, text, author };
      return [...state, newComment];
    } else {
      return state;
    }
  }, initState);
}
