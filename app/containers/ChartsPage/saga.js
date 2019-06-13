import { put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_ADS_STATS } from './constants';

import { adsStatsLoaded, adsStatsLoadingError } from './actions';

export function* getAdsStats() {
  try {
    const results = yield request(
      'https://disinfo.quaidorsay.fr/ads/dumps/facebook/graph_nb_ads_facebook.json',
    );
    yield put(adsStatsLoaded(results));
  } catch (err) {
    yield put(adsStatsLoadingError(err));
  }
}

export default function* chartsPageSaga() {
  yield takeLatest(LOAD_ADS_STATS, getAdsStats);
}
