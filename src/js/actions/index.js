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

// // spotify
// export const SEARCH_STATE = "SEARCH_STATE";
// export const searchState = createAction(SEARCH_STATE);
