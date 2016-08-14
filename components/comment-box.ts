import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment';
import Comment from '../interfaces/comment';

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

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.commentService
      .startIntervalFetch()
      .subscribe(comments => this.comments = comments);
  }

  handleCommentSubmit(comment) {
    comment.id = this.comments.length;
    this.commentService
      .add(comment)
      .subscribe(res => this.comments.push(res));
  }
}
