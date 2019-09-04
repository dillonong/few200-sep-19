import { createAction } from '@ngrx/store';

export const increment = createAction(
  '[app counter] counterIncremented'
);

export const decrement = createAction(
  '[app counter] counterDecremented'
);

export const reset = createAction(
  '[app counter] reset'
);
