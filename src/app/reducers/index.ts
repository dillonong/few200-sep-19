import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface Appstate {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selector Functions
const selectCounter = (state: Appstate) => state.counter;
export const selectCurrentCount = createSelector(selectCounter, c => c.current);
export const selectCountBy = createSelector(selectCounter, c => c.by);

export const selectDecrementDisable = createSelector(selectCurrentCount, selectCountBy, (c, b) => (c - b) < 0);
// export const selectDecrementDisable = (state: Appstate) => state.counter.current === 0; // boiler plate stuff

