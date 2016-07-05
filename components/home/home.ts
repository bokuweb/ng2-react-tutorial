import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First1 {{name}} {{1+1}} App</h1>
    <input type="text" [(ngModel)]="hoge">
    <span>{{hoge}}</span>
    `
})

export class AppComponent {
  public name = 'Angular';
}
