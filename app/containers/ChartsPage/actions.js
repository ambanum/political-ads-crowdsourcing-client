import {
  LOAD_ADS_STATS,
  LOAD_ADS_STATS_SUCCESS,
  LOAD_ADS_STATS_ERROR,
} from './constants';

export function loadAdsStats() {
  return {
    type: LOAD_ADS_STATS,
  };
}

export function adsStatsLoaded(adsStats) {
  return {
    type: LOAD_ADS_STATS_SUCCESS,
    adsStats,
  };
}

export function adsStatsLoadingError(error) {
  return {
    type: LOAD_ADS_STATS_ERROR,
    error,
  };
}
