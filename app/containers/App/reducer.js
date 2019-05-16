/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_ADS_SUCCESS,
  LOAD_ADS,
  LOAD_ADS_ERROR,
} from '../AdsPage/constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  ads: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ADS:
        draft.loading = true;
        draft.error = false;
        draft.ads = null;
        break;

      case LOAD_ADS_SUCCESS:
        draft.loading = false;
        draft.ads = action.ads;
        break;

      case LOAD_ADS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
