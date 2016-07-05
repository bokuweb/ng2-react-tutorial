import { Component, Input } from '@angular/core';
import { parse } from 'marked';

@Component({
  selector: 'comment-item',
  template: `
    <div class="comment">
      <h2 class="comment-author">
        {{author}}
      </h2>
      <span [innerHTML]="rawMarkup()"></span>
    </div>
  `
})

export class CommentItem {
  @Input() author: string
  @Input() text: string

  rawMarkup():string {
    return parse(this.text, { sanitize: true });
  }
}
