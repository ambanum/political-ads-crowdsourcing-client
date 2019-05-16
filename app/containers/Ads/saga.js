import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_ADS } from 'containers/App/constants';
import { adsLoaded, adsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getAds() {
  try {
    const ads = yield request(`${GLOBAL_CONFIG.apiUrl}/random?nb_ads=50`);
    yield put(adsLoaded(ads));
  } catch (err) {
    yield put(adsLoadingError(err));
  }
}

export default function* adsSaga() {
  yield takeLatest(LOAD_ADS, getAds);
}
