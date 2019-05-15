import { LOAD_ADS, LOAD_ADS_SUCCESS, LOAD_ADS_ERROR } from './constants';

export function loadAds() {
  return {
    type: LOAD_ADS,
  };
}

export function adsLoaded(ads) {
  return {
    type: LOAD_ADS_SUCCESS,
    ads,
  };
}

export function adsLoadingError(error) {
  return {
    type: LOAD_ADS_ERROR,
    error,
  };
}
