/*
 * CrowdsourcingPage Messages
 *
 * This contains all the text for the CrowdsourcingPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CrowdsourcingPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Évaluation de la légalité des publicités',
  },
  dataCollected: {
    id: `${scope}.dataCollected`,
    defaultMessage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  askForData: {
    id: `${scope}.askForData`,
    defaultMessage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  nothingSuspect: {
    id: `${scope}.nothingSuspect`,
    defaultMessage: 'Rien de suspect',
  },
  notRelatedToPolitics: {
    id: `${scope}.notRelatedToPolitics`,
    defaultMessage: "Ni politique, ni d'intérêt général",
  },
  cantSay: {
    id: `${scope}.cantSay`,
    defaultMessage: 'Difficile à dire',
  },
  displayNewAd: {
    id: `${scope}.displayNewAd`,
    defaultMessage: 'Afficher une autre publicité',
  },
  promotesCandidate: {
    id: `${scope}.promotesCandidate`,
    defaultMessage: 'Promeut un candidat, une liste ou un parti',
  },
  newControversial: {
    id: `${scope}.newControversial`,
    defaultMessage: 'Introduit un élément polémique nouveau',
  },
  containsSurvey: {
    id: `${scope}.containsSurvey`,
    defaultMessage: 'Contient un sondage',
  },
});
