import { put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { AD_ID_REGEXP, LOAD_COUNTS } from '../App/constants';
import { getCounts } from '../App/saga';
import { LOAD_ADS } from './constants';
import { adsLoaded, adsLoadingError } from './actions';

export function* getAds() {
  try {
    const ads = yield request(`${GLOBAL_CONFIG.apiUrl}/random?nb_ads=50`);
    ads.forEach(ad => {
      const [, adId] = ad.ad_snapshot_url.match(AD_ID_REGEXP);
      // eslint-disable-next-line no-param-reassign
      ad.id = adId;
    });
    yield put(adsLoaded(ads));
  } catch (err) {
    yield put(adsLoadingError(err));
  }
}

export default function* adsSaga() {
  yield takeLatest(LOAD_ADS, getAds);
  yield takeLatest(LOAD_COUNTS, getCounts);
}
