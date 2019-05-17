import { put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { AD_ID_REGEXP } from '../App/constants';
import { LOAD_AD, CLASSIFY_AD, CLASSIFY_AD_SUCCESS } from './constants';
import {
  loadAd,
  adLoaded,
  adLoadingError,
  classificationSuccess,
  classificationError,
} from './actions';
import { makeSelectAd } from './selectors';

export function* getAd() {
  try {
    const [ad] = yield request(`${GLOBAL_CONFIG.apiUrl}/random?nb_ads=1`);
    const [, adId] = ad.ad_snapshot_url.match(AD_ID_REGEXP);
    ad.id = adId;
    yield put(adLoaded(ad));
  } catch (err) {
    yield put(adLoadingError(err));
  }
}

export function* classifyAd(action) {
  try {
    const ad = yield select(makeSelectAd());
    yield request(`${GLOBAL_CONFIG.apiUrl}/ads/${ad.id}/annotation`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        value: action.value,
      }),
    });
    yield put(classificationSuccess());
  } catch (err) {
    yield put(classificationError(err));
  }
}

export function* loadNewAd() {
  yield put(loadAd());
}

export default function* crowdsourcingPageSaga() {
  yield takeLatest(LOAD_AD, getAd);
  yield takeLatest(CLASSIFY_AD, classifyAd);
  yield takeLatest(CLASSIFY_AD_SUCCESS, loadNewAd);
}