import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment-list',
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

