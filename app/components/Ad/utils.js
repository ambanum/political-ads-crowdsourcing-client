function prettifyImpressions(min, max) {
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

function prettifySpend(min, max, currency) {
  if (max < 100) {
    return '< 100€';
  }
  if (min >= 100 && max < 500) {
    return '100€ - 499€';
  }
  if (min >= 500 && max < 1000) {
    return '500€ - 999€';
  }
  if (min >= 1000 && max < 5000) {
    return '1K€ - 5K€';
  }
  if (min >= 5000 && max < 10000) {
    return '5K€ - 10K€';
  }
  if (min >= 10000 && max < 50000) {
    return '10K€ - 50K€';
  }
  if (min >= 50000 && max < 100000) {
    return '50K€ - 100K€';
  }
  if (min >= 100000 && max < 200000) {
    return '100K€ - 200K€';
  }
  if (min >= 200000 && max < 500000) {
    return '200K€ - 500K€';
  }
  if (min >= 500000 && max < 1000000) {
    return '500K€ - 1M€';
  }
  if (max > 1000000) {
    return '> 1M€';
  }

  return '';
}

module.exports = {
  prettifyImpressions,
  prettifySpend,
};
