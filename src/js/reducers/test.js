import * as actions from 'actions';

const initialState = {
  counter: 0,
};

export default function test(state = initialState, action) {
  switch (action.type) {
    case actions.TEST_INCREMENT:
      return { counter: state.counter + 1 };
    case actions.TEST_DECREMENT:
      return { counter: state.counter - 1 };
    case actions.TEST_CLEAR:
      return { counter: state.counter - state.counter };
    default:
      return state;
  }
}
