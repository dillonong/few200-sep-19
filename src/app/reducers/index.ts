import * as fromCounter from './counter.reducer';
export interface Appstate {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};
