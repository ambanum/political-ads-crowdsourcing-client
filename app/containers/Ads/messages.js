/*
 * Ads Messages
 *
 * This contains all the text for the Ads container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Ads';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage:
      'Check if political ads on social networks respects the law',
  },
  counter: {
    id: `${scope}.counter`,
    defaultMessage: 'Number of advertisements {count}',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Since the beginning of May, Facebook has been allowing users to query its advertising library to access political and public service announcements that have been posted on Facebook or Instagram. Unfortunately, there is still no detailed report for countries in Europe other than the United Kingdom and Ukraine. Until these reports are made available, and since access to this library requires a cumbersome procedure, we want to make as many of these advertisements as possible available to any citizen so that everyone can be sure of their legality before the European elections.',
  },
});
