import { Component, Output, EventEmitter } from '@angular/core';
import { CommentList } from './comment-list';
import { CommentService } from '../service/comment';
import Comment from '../interfaces/comment';

@Component({
  selector: 'comment-form',
  template: `
	<div class="comment-form">
	  <input type="text" value={{author}} (keyup)="onAuthorChange($event)" placeholder="Your name" />
	  <input type="text" value={{text}} (keyup)="onTextChange($event)" placeholder="Say something..." />
	  <input type="submit" value="Post" (click)="handleSubmit()" />
	</div>
	`,
  styles: [`
	.comment-form {
	  margin-top: 50px;
    }
  `]
})
export class CommentForm {
  @Output() onCommentSubmit: EventEmitter<any> = new EventEmitter();

  public author: string
  public text: string

  onAuthorChange(e: KeyboardEvent): void {
    this.author = (<HTMLInputElement>event.target).value;
  }

  onTextChange(e: KeyboardEvent): void {
    this.text = (<HTMLInputElement>event.target).value;
  }

  handleSubmit(): void {
    const author = this.author.trim();
    const text = this.text.trim();
	if (!text || !author) return;
    this.onCommentSubmit.emit({ author, text });
	this.text = '';
	this.author = '';
  }
}
