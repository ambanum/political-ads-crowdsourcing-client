import produce from 'immer';
import {
  LOAD_AD,
  LOAD_AD_SUCCESS,
  LOAD_AD_ERROR,
  LOAD_COUNTS,
  LOAD_COUNTS_SUCCESS,
  LOAD_COUNTS_ERROR,
  CLASSIFY_AD,
  CLASSIFY_AD_SUCCESS,
  CLASSIFY_AD_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  loadingCounts: false,
  error: false,
  errorCounts: false,
  ad: null,
  counts: {
    adsCount: null,
    annotationsCount: null,
  },
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

      case LOAD_COUNTS:
        draft.loadingCounts = true;
        draft.errorCounts = false;
        break;

      case LOAD_COUNTS_SUCCESS:
        draft.loadingCounts = false;
        draft.counts = {
          adsCount: action.adsCount,
          annotationsCount: action.annotationsCount,
        };
        break;

      case LOAD_COUNTS_ERROR:
        draft.errorCounts = action.error;
        draft.loadingCounts = false;
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
