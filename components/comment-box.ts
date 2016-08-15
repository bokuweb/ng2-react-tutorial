import { Component, OnInit, Inject } from '@angular/core';
import { CommentService } from '../service/comment';
import { Comment } from '../interfaces/comment';
import { Observable, Observer } from 'rxjs';
import { Action } from '../actions/action';
import { state, dispatcher } from '../store/state-and-dispatcher';
import { AddCommentAction, FetchCommentAction } from '../actions/action';

@Component({
  selector: 'comment-box',
  providers: [CommentService],
  template: `
    <div class="commentBox">
      <h1>Comments</h1>
      <comment-list [comments]="comments"></comment-list>
      <comment-form (onCommentSubmit)="handleCommentSubmit($event)"></comment-form>
    </div>
  `,
})
export class CommentBox implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService,
              @Inject(state) private state: Observable<Comment[]>,
              @Inject(dispatcher) private dispatcher: Observer<Action>) {
    this.state.subscribe(comments => this.comments = comments);
  }

  ngOnInit() {
    this.commentService
      .startIntervalFetch()
      .subscribe(comments => this.dispatcher.next(new FetchCommentAction(comments)));
  }

  handleCommentSubmit(comment) {
    comment.id = this.comments.length;
    this.commentService
      .add(comment)
      .subscribe(res => this.comments.push(res));
  }
}
