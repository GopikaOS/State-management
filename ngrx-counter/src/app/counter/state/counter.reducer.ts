import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { increment, decrement, reset } from "./counter.action";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })

);

export function counterReducer(state: { counter: number; } | undefined, action: Action) {
  console.log(state)
return _counterReducer(state, action);
}
