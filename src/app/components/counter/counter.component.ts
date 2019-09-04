import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// ADD selectCurrentCount - This will allow global reuse
import { Appstate, selectCurrentCount, selectDecrementDisable, selectCountBy } from '../../reducers';
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
  by$: Observable<number>;
  decrementDisabled$: Observable<boolean>;

  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
    // Selectors GO here - on init
    this.current$ = this.store.select(selectCurrentCount);
    this.by$ = this.store.select(selectCountBy);
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

  countBySet(by: number) {
    this.store.dispatch(actions.setCountBy({ by }));
  }
}
