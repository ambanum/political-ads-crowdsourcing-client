import {
  LOAD_ANNOTATIONS,
  LOAD_ANNOTATIONS_SUCCESS,
  LOAD_ANNOTATIONS_ERROR,
} from './constants';

export function loadAnnotations(options) {
  return {
    type: LOAD_ANNOTATIONS,
    options,
  };
}

export function annotationsLoaded(annotations) {
  return {
    type: LOAD_ANNOTATIONS_SUCCESS,
    annotations,
  };
}

export function annotationsLoadingError(error) {
  return {
    type: LOAD_ANNOTATIONS_ERROR,
    error,
  };
}
