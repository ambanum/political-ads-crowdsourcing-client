import {
  LOAD_COUNTS,
  LOAD_COUNTS_SUCCESS,
  LOAD_COUNTS_ERROR,
} from './constants';

export function loadCounts(options) {
  return {
    type: LOAD_COUNTS,
    options,
  };
}

export function countsLoaded({ adsCount, annotationsCount }) {
  return {
    type: LOAD_COUNTS_SUCCESS,
    adsCount,
    annotationsCount,
  };
}

export function countsLoadingError(error) {
  return {
    type: LOAD_COUNTS_ERROR,
    error,
  };
}
