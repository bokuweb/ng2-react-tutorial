import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommentList } from '../components/comment-list';
import { CommentForm } from '../components/comment-form';
import { CommentItem } from '../components/comment-item';

import { HTTP_PROVIDERS } from '@angular/http';
import { CommentBox } from '../components/comment-box';

// bootstrap(CommentBox, [HTTP_PROVIDERS]);

@NgModule({
  declarations: [
    CommentBox,
    CommentList,
    CommentForm,
    CommentItem,
  ],
  providers: [
    HTTP_PROVIDERS,
  ],
  imports: [BrowserModule],
  bootstrap: [CommentBox]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
