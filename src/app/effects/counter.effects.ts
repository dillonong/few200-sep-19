import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as actions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions'; // Can be in its own file
import { tap, map, filter } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  readCountByForReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      // read value from localStorage
      map(() => localStorage.getItem('by')),
      // if null do nothing
      filter(val => val !== null),
      // Else Convert to a number
      map(val => parseInt(val, 10)),
      // dispatch an Action CountBySet(x)
      map(by => actions.setCountBy({ by }))
    )
  );

  writeCountByForReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.reset),
      tap(() => localStorage.setItem('by', '1')) // tap passes the action through
    ), { dispatch: false }
  );

  writeCountyBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.setCountBy),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );
  constructor(private actions$: Actions) { }
}
