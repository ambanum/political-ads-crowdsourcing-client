import getSymbolFromCurrency from 'currency-symbol-map';

export function prettifyImpressions(min, max) {
  if (max < 1000) {
    return '< 1000';
  }
  if (min >= 1000 && max < 5000) {
    return '1K - 5K';
  }
  if (min >= 5000 && max < 10000) {
    return '5K - 10K';
  }
  if (min >= 10000 && max < 50000) {
    return '10K - 50K';
  }
  if (min >= 50000 && max < 100000) {
    return '50K - 100K';
  }
  if (min >= 100000 && max < 200000) {
    return '100K - 200K';
  }
  if (min >= 200000 && max < 500000) {
    return '200K - 500K';
  }
  if (min >= 500000 && max < 1000000) {
    return '500K - 1M';
  }
  if (max > 1000000) {
    return '>1M';
  }

  return '';
}

export function prettifySpend(min, max, currency) {
  const currencySymbol = getSymbolFromCurrency(currency) || currency;

  if (max < 100) {
    return `< 100${currencySymbol}`;
  }
  if (min >= 100 && max < 500) {
    return `100${currencySymbol} - 499${currencySymbol}`;
  }
  if (min >= 500 && max < 1000) {
    return `500${currencySymbol} - 999${currencySymbol}`;
  }
  if (min >= 1000 && max < 5000) {
    return `1K${currencySymbol} - 5K${currencySymbol}`;
  }
  if (min >= 5000 && max < 10000) {
    return `5K${currencySymbol} - 10K${currencySymbol}`;
  }
  if (min >= 10000 && max < 50000) {
    return `10K${currencySymbol} - 50K${currencySymbol}`;
  }
  if (min >= 50000 && max < 100000) {
    return `50K${currencySymbol} - 100K${currencySymbol}`;
  }
  if (min >= 100000 && max < 200000) {
    return `100K${currencySymbol} - 200K${currencySymbol}`;
  }
  if (min >= 200000 && max < 500000) {
    return `200K${currencySymbol} - 500K${currencySymbol}`;
  }
  if (min >= 500000 && max < 1000000) {
    return `500K${currencySymbol} - 1M${currencySymbol}`;
  }
  if (max > 1000000) {
    return `> 1M${currencySymbol}`;
  }

  return '';
}
