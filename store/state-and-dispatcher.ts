import { OpaqueToken } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from '../actions/action';
import { stateFn } from '../store';

export const initState = new OpaqueToken("initState");
export const dispatcher = new OpaqueToken("dispatcher");
export const state = new OpaqueToken("state");

export const stateAndDispatcher = [
  {
    provide: initState,
    useValue: [],
  }, {
    provide: dispatcher,
    // useValue: new Subject<Action>(null)
    useValue: new Subject()
  }, {
    provide: state,
    useFactory: stateFn,
    deps: [initState, dispatcher]
  }
];
