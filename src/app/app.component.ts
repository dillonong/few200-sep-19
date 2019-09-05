import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from './reducers';
import { applicationStarted } from './actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(store: Store<Appstate>) {
    store.dispatch(applicationStarted());
  }
}
