import { Component, Input } from '@angular/core';
import { CommentItem } from './comment-item';

@Component({
  selector: 'comment-list',
  directives: [CommentItem],
  template: `
    <div class="comment-list">
      <div *ngFor="let comment of comments">
        <comment-item [author]="comment.author" [text]="comment.text"></comment-item>
      </div>
    </div>
    `
})

export class CommentList {
  @Input() comments;
}

