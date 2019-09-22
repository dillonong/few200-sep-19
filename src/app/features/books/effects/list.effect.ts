import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as listActions from '../actions/list.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { ListEntity } from '../reducers/list.reducer';

@Injectable()
export class ListEffects {
  readonly url = 'http://localhost:3000/shows'; // This needs to be in an env

  // Get app_start
  loadShowsOnAppStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.client.get<ListEntity[]>(this.url)
        .pipe(
          map(items => listActions.booksLoaded({ books: items }))
        )
      )
    ), { dispatch: true }
  );

  // Add a show and post
  saveShowToServer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.bookAdded),
      map(a => a.entity),  // convert the action into a ListEntity
      switchMap(a => this.client.post<ListEntity>(this.url, { title: a.title }) // use this for HTTP
        .pipe(
          map(result => listActions.bookAddedSuccess({ oldid: a.id, newEntity: result }))
        )
      )
    ), { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}
