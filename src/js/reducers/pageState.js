import * as actions from 'actions';

const initialState = {
  // nowPage: 'home',
  nowPage: 'rss_feed',
};

export default function pageState(state = initialState, action) {
  switch (action.type) {
    case actions.PAGE_STATE:
      return { nowPage: action.payload };
    default:
      return state;
  }
}
