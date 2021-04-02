//import { initialState } from './../state/counter.state';
import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/counter.actions';


const _counterReducer = createReducer(
    initialState,
    on(increment, state => ({ ...state, counter: state.counter + 1, })),
    on(decrement, state => ({ ...state, counter: state.counter - 1, })),
    on(reset, state => ({ ...state, counter: state.counter = 0, })),
);

export function counterReducer(state: { counter: number; } | undefined, action: Action) {
    return _counterReducer(state, action);
}