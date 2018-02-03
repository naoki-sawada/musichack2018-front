import * as actions from 'actions';

const initialState = {
  image: '',
  message: '',
  id: '',
};

export default function pageState(state = initialState, action) {
  switch (action.type) {
    case actions.POST_DATA_IMAGE:
      return { ...state, image: action.payload };
    case actions.POST_DATA_MESSAGE:
      return { ...state, message: action.payload };
    case actions.POST_DATA_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
}
