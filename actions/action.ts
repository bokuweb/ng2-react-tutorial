import { Comment } from '../interfaces/comment';

export class AddCommentAction {
  public payload: {
    id: number;
    text: string;
    author: string;
  }

  constructor(comment: Comment) {
    this.payload = comment;
  }
}

export class FetchCommentAction {
  public payload: {
    comments: Comment[];
  }

  constructor(comments: Comment[]) {
    this.payload = { comments };
  }
}

export type Action = AddCommentAction | FetchCommentAction;
