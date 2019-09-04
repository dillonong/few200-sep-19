import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// ADD selectCurrentCount - This will allow global reuse
import { Appstate, selectCurrentCount, selectDecrementDisable } from '../../reducers';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

// user /counter URL - it is in the Routing
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // current = 0;
  current$: Observable<number>; // $ means Observable
  decrementDisabled$: Observable<boolean>;

  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
    this.decrementDisabled$ = this.store.select(selectDecrementDisable);
  }

  increment() {
    this.store.dispatch(actions.increment());
  }

  decrement() {
    this.store.dispatch(actions.decrement());
    // this.current = this.current - 1;
  }

  reset() {
    this.store.dispatch(actions.reset());
  }
}
