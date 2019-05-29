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
  supTitle: {
    id: `${scope}.supTitle`,
    defaultMessage: "Quelqu'un cherche peut-être à influencer les élections.",
  },
  back: {
    id: `${scope}.back`,
    defaultMessage: 'Retourner à la liste des publicités',
  },
  shareFriends: {
    id: `${scope}.shareFriends`,
    defaultMessage: 'Faites participer vos amis',
  },
  shareCommunity: {
    id: `${scope}.shareCommunity`,
    defaultMessage: 'Faites participer votre communauté',
  },
  totalAds: {
    id: `${scope}.totalAds`,
    defaultMessage: 'Publicités au total',
  },
  evaluated: {
    id: `${scope}.evaluated`,
    defaultMessage: 'Évaluées',
  },
  explanation: {
    id: `${scope}.explanation`,
    defaultMessage:
      'Cette interface permet d\'évaluer la légalité de chaque publicité. Évaluez chaque publicité avec les boutons qui l\'entourent.<br />Des informations complémentaires sur chacun des cas sont disponibles sur notre <a target="_blank" href="https://disinfo.quaidorsay.fr/encyclopedia/qualification/tools#criterion-illegal">encyclopédie collaborative</a>.',
  },
  dataCollected: {
    id: `${scope}.dataCollected`,
    defaultMessage:
      "En plus de votre proposition d'évaluation, nous enregistrons la date et des <abbr title=\"hash salé de l'IP et du user-agent\">éléments d'identification anonymes </abbr> afin de pouvoir effacer d'éventuelles contributions malveillantes.",
  },
  askForData: {
    id: `${scope}.askForData`,
    defaultMessage:
      'Nous travaillons à rendre lisibles les résultats de cette évaluation, si vous voulez y avoir accès avant, <a href="mailto:matti.schneider@diplomatie.gouv.fr">contactez-nous.</a>',
  },
  dataCollectedInfo: {
    id: `${scope}.dataCollectedInfo`,
    defaultMessage: 'Données collectées',
  },
  askForDataInfo: {
    id: `${scope}.askForDataInfo`,
    defaultMessage: 'Résultats',
  },
  nothingSuspect: {
    id: `${scope}.nothingSuspect`,
    defaultMessage: "Promouvoir l'engagement",
  },
  nothingSuspectQuiet: {
    id: `${scope}.nothingSuspectQuiet`,
    defaultMessage: 'mais pas un parti ou candidat‧e spécifique',
  },
  nothingSuspectDetails: {
    id: `${scope}.nothingSuspectDetails`,
    defaultMessage:
      'Pousse à s’impliquer politiquement (vote, militantisme, pétition…) sans chercher à pousser vers un acteur politique spécifique.',
  },
  notRelatedToPolitics: {
    id: `${scope}.notRelatedToPolitics`,
    defaultMessage: 'Commercial et non politique',
  },
  notRelatedToPoliticsQuiet: {
    id: `${scope}.notRelatedToPoliticsQuiet`,
    defaultMessage: "ni lié à un débat d'intérêt général",
  },
  notRelatedToPoliticsDetails: {
    id: `${scope}.notRelatedToPoliticsDetails`,
    defaultMessage:
      "Ne porte pas sur un sujet politique. N'a pas non plus pour but d'attirer l'attention sur un sujet de société important, de promouvoir l'action par rapport à ce sujet ou d'influencer l'opinion par rapport à ce sujet en mettant en avant des intérêts particuliers.",
  },
  cantSay: {
    id: `${scope}.cantSay`,
    defaultMessage: 'Difficile à dire',
  },
  cantSayDetails: {
    id: `${scope}.cantSayDetails`,
    defaultMessage:
      "Les élements fournis dans cette publicité ne sont pas suffisants pour permettre d'identifier clairement un sujet (exemple: la politique), un objet (exemple: une personne ou un parti) et/ou une intention (promotion, critique, volonté de nuire).",
  },
  displayNewAd: {
    id: `${scope}.displayNewAd`,
    defaultMessage: 'Afficher une autre publicité',
  },
  promotesCandidate: {
    id: `${scope}.promotesCandidate`,
    defaultMessage: 'Promouvoir ou critiquer',
  },
  promotesCandidateQuiet: {
    id: `${scope}.promotesCandidateQuiet`,
    defaultMessage: 'un parti ou un‧e candidat‧e',
  },
  promotesCandidateDetails: {
    id: `${scope}.promotesCandidateDetails`,
    defaultMessage:
      'La publicité commerciale à des fins de propagande électorale est interdite en période électorale en France. Il est donc interdit de payer pour mettre en avant un parti, un‧e candidat‧e ou en critiquer d’autres.',
  },
  newControversial: {
    id: `${scope}.newControversial`,
    defaultMessage: 'Fait des révélations',
  },
  newControversialQuiet: {
    id: `${scope}.newControversialQuiet`,
    defaultMessage: 'sur un parti ou un‧e candidat‧e',
  },
  newControversialDetails: {
    id: `${scope}.newControversialDetails`,
    defaultMessage:
      'Il est interdit aux candidat‧e‧s de révéler « un élément nouveau de polémique électorale » à un moment trop proche de la fin de la campagne électorale si cela implique que les candidat‧e‧s touché‧e‧s ne pourront pas « y répondre utilement ».',
  },
  containsSurvey: {
    id: `${scope}.containsSurvey`,
    defaultMessage: 'Contient un sondage',
  },
  containsSurveyDetails: {
    id: `${scope}.containsSurveyDetails`,
    defaultMessage:
      'Il est interdit de publier des sondages d’opinion si leur objectivité, leur qualité et leur authenticité n’a pas été garantie par la Commission des Sondages',
  },
});
