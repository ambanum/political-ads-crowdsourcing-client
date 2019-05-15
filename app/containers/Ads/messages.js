/*
 * Ads Messages
 *
 * This contains all the text for the Ads container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Ads';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Facebook!',
  },
  counter: {
    id: `${scope}.counter`,
    defaultMessage: 'Number of advertisements {count}',
  },
});
