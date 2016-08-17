import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/async-test';
import 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import assert = require('power-assert');
import { CommentList } from '../components/comment-list';
import { CommentItem } from '../components/comment-item';
import { Comment } from '../interfaces/comment';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

describe ('comment-list test.', () => {
  @Component({
    template: `
      <comment-list [comments]="comments"></comment-list>
    `,
  })
  class TestCmp {
    comments: Comment[] = [
      { id: 0, text: 'text1', author: 'author1' },
      { id: 1, text: 'text2', author: 'author2' }
    ];
  }

  beforeEach(() => {
    // setup
    TestBed.configureTestingModule({
      declarations: [TestCmp, CommentList, CommentItem]
    });
  });

  it('component test', (done) => {
    // compile test component
    TestBed.compileComponents().then(() => {
      // create component instance
      const fixture = TestBed.createComponent(TestCmp);
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement as HTMLElement;
      const authors = el.querySelectorAll('comment-item h2.comment-author');
      const text = el.querySelectorAll('span');
      assert.equal(el.querySelectorAll('comment-item').length, 2);
      assert.equal(authors.length, 2);
      assert.equal(authors[0].textContent.trim(), 'author1');
      assert.equal(text.length, 2);
      assert.equal(text[0].textContent.trim(), 'text1');
      assert.equal(text[1].textContent.trim(), 'text2');
      done();
    });
  });
});

