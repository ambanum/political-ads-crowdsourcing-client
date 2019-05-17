import produce from 'immer';
import {
  LOAD_AD,
  LOAD_AD_SUCCESS,
  LOAD_AD_ERROR,
  CLASSIFY_AD,
  CLASSIFY_AD_SUCCESS,
  CLASSIFY_AD_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  ad: null,
  classification: null,
};

/* eslint-disable default-case, no-param-reassign */
const crowdsourcingPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_AD:
        draft.loading = true;
        draft.error = false;
        draft.ad = null;
        break;

      case LOAD_AD_SUCCESS:
        draft.loading = false;
        draft.ad = action.ad;
        break;

      case LOAD_AD_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case CLASSIFY_AD:
        draft.loading = true;
        draft.classification = action.value;
        break;

      case CLASSIFY_AD_SUCCESS:
        draft.loading = false;
        break;

      case CLASSIFY_AD_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default crowdsourcingPageReducer;
