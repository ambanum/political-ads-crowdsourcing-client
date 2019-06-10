import { put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_ANNOTATIONS } from './constants';
import { annotationsLoaded, annotationsLoadingError } from './actions';

export function* getAnnotations(action) {
  try {
    let url = `${GLOBAL_CONFIG.apiUrl}/annotations`;

    if (action.options && action.options.type) {
      url = `${url}/${action.options.type}`;
    }

    const annotations = yield request(
      `${url}?skip=${action.options.skip}&limit=${action.options.limit}`,
    );
    yield put(annotationsLoaded(annotations));
  } catch (err) {
    yield put(annotationsLoadingError(err));
  }
}

export default function* annotationsSaga() {
  yield takeLatest(LOAD_ANNOTATIONS, getAnnotations);
}
