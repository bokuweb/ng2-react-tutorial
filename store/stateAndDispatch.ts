import { OpaqueToken } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from '../actions/action';
import { stateFn } from '../store';

const initState = new OpaqueToken("initState");
const dispatcher = new OpaqueToken("dispatcher");
const state = new OpaqueToken("state");

const stateAndDispatcher = [
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
