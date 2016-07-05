import { Injectable } from '@angular/core';
import Comment from '../interfaces/comment';
import { Http, Request, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

  constructor(private http: Http) {
  }

  startIntervalFetch(): Observable<Comment[]> {
    return Observable.interval(1000)
      .flatMap(() => this.http.get("http://localhost:3001/comments"))
      .map(res => res.json() as Comment[]);
  }

  add(comment: Comment): Observable<Comment> {
    return this.http
      .post("http://localhost:3001/comments", comment)
      .map(res => res.json() as Comment);
  }
}
