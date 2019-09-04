import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCurrentCount, selectCountBy, Appstate } from '../../reducers';

// Component is a func defined in angular/core
@Component(
  {
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  }
)
export class DashboardComponent implements OnInit {
  // message = 'Coming soon!';
  current$: Observable<number>;
  by$: Observable<number>;

  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
    this.by$ = this.store.select(selectCountBy);
  }
}
