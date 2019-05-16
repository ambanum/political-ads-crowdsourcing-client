/*
 * Ad Messages
 *
 * This contains all the text for the Ad component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Ad';

export default defineMessages({
  sponsored: {
    id: `${scope}.sponsored`,
    defaultMessage: 'sponsored',
  },
  sponsoredBy: {
    id: `${scope}.sponsoredBy`,
    defaultMessage: 'sponsored by',
  },
  cantDisplayMedia: {
    id: `${scope}.cantDisplayMedia`,
    defaultMessage:
      'Facebook does not allow us to display the image or video presented with this ad',
  },
  amountSpent: {
    id: `${scope}.amountSpent`,
    defaultMessage: 'Amount spent',
  },
  impressions: {
    id: `${scope}.impressions`,
    defaultMessage: 'Impressions',
  },
});
