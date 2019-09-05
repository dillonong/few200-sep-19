import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
};
// READ from ngrx.io docs
const createdReducer = createReducer(
  initialState,
  on(actions.increment, (s) => ({ current: s.current + s.by, by: s.by })), // 2 ways to do this
  on(actions.decrement, (s) => ({ ...s, current: s.current - s.by })), // spread - MERGE right to left
  on(actions.setCountBy, (s, a) => ({ ...s, by: a.by })),
  on(actions.reset, () => initialState)
);

export function reducer(state: CounterState = initialState, action: Action) {
  return createdReducer(state, action);
}
