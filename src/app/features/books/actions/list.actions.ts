import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';

let currentFakeId = 1;
export const bookAdded = createAction(
  '[books] list bookAdded',
  ({ title }: { title: string }) => ({
    entity: {
      id: currentFakeId++ + 'T', // T for temporary - FLAGGED
      title
    } as ListEntity
  })
);

export const booksLoaded = createAction(
  '[books] list books loaded',
  props<{ books: ListEntity[] }>()
);

export const bookAddedSuccess = createAction(
  '[books] list books added successfully',
  props<{ oldid: string, newEntity: ListEntity }>()
);
