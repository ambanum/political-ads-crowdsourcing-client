/*
 * ChartsPage Messages
 *
 * This contains all the text for the ChartsPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ChartsPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Suivi du nombre de publicités politiques sur Facebook',
  },
  descriptionFirstPart: {
    id: `${scope}.descriptionFirstPart`,
    defaultMessage:
      '<p>Facebook a lancé sa “<a href="https://www.facebook.com/ads/library/?active_status=all&ad_type=political_and_issue_ads&country=FR">blibliothèque publicitaire</a>” en mai 2018 pour faire preuve de plus de transparence en matière de publicités politiques et liées à des sujets d\'intérêt général publiées sur la plateforme.</p>    <p>La bibliothèque publicitaire Facebook peut être consultée en ligne et interrogée via une <a href="https://www.facebook.com/ads/library/api/">API</a>. Les données sont agrégées par pays et publiées sous la forme d\'un « <a href="https://www.facebook.com/ads/library/report/">rapport</a> » : une page web avec des tableurs interactifs et un fichier CSV téléchargeable.</p>    <p>Nous voulions mesurer la légalité des publicités publiées en France pendant les élections européennes de 2019. Nous avons créé une <a href="/political-ads/crowdsourcing">interface de crowdsourcing</a> qui nous a permis d’identifier des contenus suspects. Ce faisant, nous avons également découvert de nombreuses <a href="https://disinfo.quaidorsay.fr/en/facebook-ads-library-assessment">limitations</a> de l\'API et de la bibliothèque publicitaire en général.</p>',
  },
  descriptionSecondPart: {
    id: `${scope}.descriptionSecondPart`,
    defaultMessage:
      '<p>Pour mener nos recherches malgré ces limites, nous avons décidé de <a href="https://desinfo.quaidorsay.fr/ads/dumps/">télécharger</a> régulièrement le contenu de la bibliothèque publicitaire <a href="https://github.com/ambanum/political-ads-scraper">via son API</a>. Avec le temps, nous avons observé que <strong>des publicités sont supprimées de la bibliothèque</strong>, ce qui entre en contradiction avec la <a href="https://www.facebook.com/ads/library/?active_status=all&ad_type=political_and_issue_ads&country=FR">promesse</a> de Facebook :</p>\n\n    <blockquote>« La bibliothèque contient des données sur toutes les publicités portant sur des enjeux sociaux, les élections ou la politique, depuis mars 2019, qu’elles soient actives ou inactives. Nous conserverons toutes ces publicités dans la bibliothèque pendant sept ans. »</blockquote>\n\n    <p>Vous trouverez ci-dessous l\'évolution du nombre de publicités indiqué dans les rapports publics, et le nombre de publicités réellement disponibles via l\'API, pour l\'ensemble des pays de l\'Union Européenne.</p>',
  },
  apiLabel: {
    id: `${scope}.apiLabel`,
    defaultMessage: "Accessible via l'API",
  },
  reportsLabel: {
    id: `${scope}.reportsLabel`,
    defaultMessage: 'Accessible dans les rapports',
  },
  yLabel: {
    id: `${scope}.yLabel`,
    defaultMessage: 'Nombre de publicités (en milliers)',
  },
  ads: {
    id: `${scope}.ads`,
    defaultMessage: 'publicités',
  },
  elections: {
    id: `${scope}.elections`,
    defaultMessage: 'Élections Européennes',
  },
});
