/*
 * Ads Messages
 *
 * This contains all the text for the Ads container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.App';

export default defineMessages({
  sourceCode: {
    id: `${scope}.sourceCode`,
    defaultMessage: 'Code source',
  },
  contactUs: {
    id: `${scope}.contactUs`,
    defaultMessage: 'Contactez-nous',
  },
  ourWork: {
    id: `${scope}.ourWork`,
    defaultMessage: 'Nos autres travaux',
  },
  values: {
    id: `${scope}.values`,
    defaultMessage:
      "Réalisé dans un souci de <strong>transparence</strong>, d'<strong>intérêt général</strong>, de <strong>collaboration</strong>, d'<strong>agilité</strong> et de <strong>bienveillance</strong><br /> par l'équipe de l'Ambassadeur pour le numérique.",
  },
});
