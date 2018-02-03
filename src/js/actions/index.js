import { createAction } from 'redux-actions';

export const TEST_INCREMENT = "TEST_INCREMENT";
export const TEST_DECREMENT = "TEST_DECREMENT";
export const TEST_CLEAR = "TEST_CLEAR";

export const testIncrement = createAction(TEST_INCREMENT);
export const testDecrement = createAction(TEST_DECREMENT);
export const testClear = createAction(TEST_CLEAR);

// page state
export const PAGE_STATE = "PAGE_STATE";
export const pageState = createAction(PAGE_STATE);

// search state
export const SEARCH_STATE = "SEARCH_STATE";
export const searchState = createAction(SEARCH_STATE);

// post action
export const POST_ACTION = "POST_ACTION";
export const postAction = createAction(POST_ACTION);


// post data
export const POST_DATA_ID = "POST_DATA_ID";
export const POST_DATA_IMAGE = "POST_DATA_IMAGE";
export const POST_DATA_MESSAGE = "POST_DATA_MESSAGE";

export const postDataId = createAction(POST_DATA_ID);
export const postDataImage = createAction(POST_DATA_IMAGE);
export const postDataMessage = createAction(POST_DATA_MESSAGE);

// // spotify
// export const SEARCH_STATE = "SEARCH_STATE";
// export const searchState = createAction(SEARCH_STATE);
