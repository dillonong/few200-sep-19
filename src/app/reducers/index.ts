import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface Appstate {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selector Functions

export const selectCurrentCount = (state: Appstate) => state.counter.current;

export const selectDecrementDisable = createSelector(selectCurrentCount, (c) => c === 0);
// export const selectDecrementDisable = (state: Appstate) => state.counter.current === 0; // boiler plate stuff
