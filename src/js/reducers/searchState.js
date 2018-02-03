import * as actions from 'actions';

const initialState = {
  state: 'default',
};

export default function pageState(state = initialState, action) {
  switch (action.type) {
    case actions.SEARCH_STATE:
      return { state: action.payload };
    default:
      return state;
  }
}
