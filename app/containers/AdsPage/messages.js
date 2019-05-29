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
    defaultMessage: 'Échantillon aléatoire de {count} publicités sur {total}',
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
      "Facebook permet depuis début mai d'interroger sa bibliothèque publicitaire pour accéder aux publicités politiques et liées à des débats d’intérêt général et fournit un <a href=\"https://www.facebook.com/ads/library/report/\">rapport détaillé</a> pour chaque pays de l’Union européenne. Néanmoins cette évaluation est aujourd’hui intégralement déléguée à des acteurs privés, et il semble important de les aider à caractériser au mieux ce qui relève du débat politique ou « d’intérêt général ».<br /> Nous souhaitons ici permettre à tou‧te‧s les citoyen‧ne‧s de s'assurer que la propagande électorale respecte les règles.<br /> De plus, en stockant ces données indépendamment de leur fournisseur nous en garantissons l'intégrité dans le temps.",
  },
  'description.dumpAccess': {
    id: `${scope}.description.dumpAccess`,
    defaultMessage:
      'Nous mettons également à disposition l\'ensemble des <a target="_blank" href="https://disinfo.quaidorsay.fr/ads/dumps/">publicités que nous avons collectées pour chaque pays de l\'union européenne</a> sous la forme de jeux de données au format JSON afin d\'en permettre la réutilisation le plus simplement possible.',
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
    defaultMessage:
      "Évaluer la légalité d'une des {total} publicités diffusées en France",
  },
});
