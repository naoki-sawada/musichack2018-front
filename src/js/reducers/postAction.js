import * as actions from 'actions';

const initialState = {
  // nowPage: 'home',
  value: '',
};

export default function pageState(state = initialState, action) {
  switch (action.type) {
    case actions.POST_ACTION:
      return { value: action.payload };
    default:
      return state;
  }
}
