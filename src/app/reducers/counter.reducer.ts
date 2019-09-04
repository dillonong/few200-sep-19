import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

const createdReducer = createReducer(
  initialState,
  on(actions.increment, (s) => ({ current: s.current + 1 })),
  on(actions.decrement, (s) => ({ current: s.current - 1 })),
  on(actions.reset, () => initialState)
);

export function reducer(state: CounterState = initialState, action: Action) {
  return createdReducer(state, action);
}
