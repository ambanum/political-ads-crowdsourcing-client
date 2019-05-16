import { put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_ADS } from './constants';
import { adsLoaded, adsLoadingError } from './actions';

export function* getAds(action) {
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
