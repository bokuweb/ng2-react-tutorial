import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { CommentList } from '../components/comment-list';
import { CommentForm } from '../components/comment-form';
import { CommentItem } from '../components/comment-item';
import { CommentBox } from '../components/comment-box';
import { stateAndDispatcher } from '../store/state-and-dispatcher';

@NgModule({
  declarations: [
    CommentBox,
    CommentList,
    CommentForm,
    CommentItem,
  ],
  providers: [
    HTTP_PROVIDERS,
    stateAndDispatcher,
  ],
  imports: [BrowserModule],
  bootstrap: [CommentBox]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
