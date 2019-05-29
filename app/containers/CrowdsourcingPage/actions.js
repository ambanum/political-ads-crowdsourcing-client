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

export function loadAd(options) {
  return {
    type: LOAD_AD,
    options,
  };
}

export function adLoaded(ad) {
  return {
    type: LOAD_AD_SUCCESS,
    ad,
  };
}

export function adLoadingError(error) {
  return {
    type: LOAD_AD_ERROR,
    error,
  };
}

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

export function classifyAd(value) {
  return {
    type: CLASSIFY_AD,
    value,
  };
}

export function classificationSuccess() {
  return {
    type: CLASSIFY_AD_SUCCESS,
  };
}

export function classificationError(error) {
  return {
    type: CLASSIFY_AD_ERROR,
    error,
  };
}
