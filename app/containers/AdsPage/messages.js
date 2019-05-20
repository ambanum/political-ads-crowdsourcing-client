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
  'description.what': {
    id: `${scope}.description.what`,
    defaultMessage: 'Qu’est-ce que ce site&nbsp;?',
  },
  'description.whatParagraph': {
    id: `${scope}.description.whatParagraph`,
    defaultMessage:
      "Ce site affiche les publicités que les opérateurs de réseaux sociaux classent comme d’ordre politique, c'est-à-dire qui soutiennent directement une liste, ou qui sont liées à un débat majeur des élections européennes 2019 (par exemple l’écologie, l’immigration…). Pour l’instant, nous n’affichons que les publicités Facebook.",
  },
  'description.why': {
    id: `${scope}.description.why`,
    defaultMessage: 'Pourquoi ce site&nbsp;?',
  },
  'description.whyParagraph': {
    id: `${scope}.description.whyParagraph`,
    defaultMessage:
      'Facebook permet depuis début mai d\'interroger sa <a href="https://www.facebook.com/ads/library">bibliothèque publicitaire</a> pour accéder aux publicités politiques et liées à des débats d’intérêt général qui ont été diffusées sur Facebook ou Instagram dans l’Union européenne. Malheureusement, l’accès à ces publicités n’est possible que par une recherche précise, ou par un moyen qui nécessite de savoir coder (une <a href="https://www.facebook.com/ads/library/api">API</a>). Qui plus est, l’accès à cette API n’est possible qu’avec un compte Facebook dont l’identité a été validée par l’envoi d’une pièce d’identité à Facebook.<br>Pour certains pays, Facebook fournit un <a href="https://www.facebook.com/ads/library/report/?source=archive-landing-page&country=GB">rapport détaillé</a> accessible publiquement, mais celui-ci n’existe pas encore pour les pays de l\'Union européenne à part le Royaume-Uni.<br>Nous souhaitons rendre disponible ces publicités à tou‧te‧s les citoyen‧ne‧s afin que chacun‧e puisse s\'assurer de leur légalité.',
  },
  'description.how': {
    id: `${scope}.description.how`,
    defaultMessage: 'Comment ça marche&nbsp;?',
  },
  'description.howParagraph': {
    id: `${scope}.description.howParagraph`,
    defaultMessage:
      'Nous téléchargeons toutes les publicités via l’<a href="https://www.facebook.com/ads/library/api">API Facebook</a> et nous les rendons visibles ici. Tout <a href="https://github.com/ambanum/political-ads-legality">notre code</a> est libre et vos améliorations sont bienvenues&nbsp;!',
  },
  'description.limitations': {
    id: `${scope}.description.limitations`,
    defaultMessage: 'Quelles sont les limites&nbsp;?',
  },
  'description.limitationsParagraph': {
    id: `${scope}.description.limitationsParagraph`,
    defaultMessage:
      'Pour l’instant, nous n’examinons que les publicités sur Facebook. Plusieurs autres annonceurs devraient être examinés également.<br>De même, nous nous reposons sur les données qui sont fournies par l’annonceur&nsbp;: nous devons faire confiance à Facebook pour fournir <em>toutes</em> les publicités d’ordre politique.',
  },
  'description.more': {
    id: `${scope}.description.more`,
    defaultMessage: 'C’est tout&nbsp;?',
  },
  'description.moreParagraph': {
    id: `${scope}.description.moreParagraph`,
    defaultMessage:
      'Non. Nous sommes en train de consolider et rendre lisibles les conditions légales de publicité politique en France et de construire une interface dédiée pour faciliter l’évaluation de la légalité de chaque publicité. Nous cherchons également activement des partenaires pour déployer ce système dans toute l’Union européenne. Vous savez coder ou traduire&nbsp;? <a href="mailto:matti.schneider@diplomatie.gouv.fr?subject=Ads">Aidez-nous</a>&nbsp;!',
  },
  'description.ourWorkParagraph': {
    id: `${scope}.description.ourWorkParagraph`,
    defaultMessage:
      'Cet outil fait partie de <a href="http://disinfo.quaidorsay.fr">nos expériences de lutte contre la désinformation.</a>',
  },
  'description.tryCrowdsourcing': {
    id: `${scope}.description.tryCrowdsourcing`,
    defaultMessage: "Essayer l'interface d'évaluation de la légalité",
  },
});
