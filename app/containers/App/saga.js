import { put } from 'redux-saga/effects';
import request from 'utils/request';

import { countsLoaded, countsLoadingError } from './actions';

export function* getCounts() {
  try {
    const { adsCount, annotationsCount } = yield request(
      `${GLOBAL_CONFIG.apiUrl}/counts`,
    );
    yield put(countsLoaded({ adsCount, annotationsCount }));
  } catch (err) {
    yield put(countsLoadingError(err));
  }
}
