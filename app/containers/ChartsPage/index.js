/**
 *
 * ChartsPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  injectIntl,
  intlShape,
  FormattedMessage,
  FormattedHTMLMessage,
} from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import i18NIsoCountries from 'i18n-iso-countries';
import frLocale from 'i18n-iso-countries/langs/fr.json';
import enLocale from 'i18n-iso-countries/langs/en.json';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import {
  Section,
  Container,
  Heading,
  Hero,
  Columns,
} from 'react-bulma-components';
import Spinner from 'components/Spinner';
import Chart from './Chart';
import { loadAdsStats } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectAdsStats,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { changeLocale } from '../LanguageProvider/actions';
import { appLocales, DEFAULT_LOCALE } from '../../i18n';
import { transformDataForChart } from './utils';
import { FB_ADS_REPORT_URL } from './constants';

i18NIsoCountries.registerLocale(enLocale);
i18NIsoCountries.registerLocale(frLocale);

const ChartsPageWrapper = styled.section`
  background-color: rgb(127, 90, 131);
  background-image: linear-gradient(
    315deg,
    rgb(127, 90, 131) 0%,
    rgb(13, 50, 77) 74%
  );
`;

const Title = styled(Heading)`
  color: #fff;
  text-align: center;
  font-weight: 400;
  max-width: 800px;
  margin: auto;
`;

const ExplanationSection = styled(Section)`
  border-top: 1px solid #333;
  background: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;

  p,
  blockquote {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    line-height: 1.6875rem;
  }

  blockquote {
    font-style: italic;
    text-indent: 1rem;
    color: #4a4a4a;
  }
`;

const ChartSection = styled(Section)`
  border-bottom: 1px solid #555;
  box-shadow: inset rgba(0, 0, 0, 0.2) 0px 1px 8px 0px,
    inset rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
    inset rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;
`;

const CountryChart = styled.div`
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;
  background: #fff;
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const FirstColumn = styled(Columns.Column)`
  @media screen and (min-width: 768px) {
    p {
      margin-right: 1rem;
    }
  }
`;

const SecondColumn = styled(Columns.Column)`
  @media screen and (min-width: 768px) {
    p,
    blockquote {
      margin-left: 1rem;
    }
  }
`;

const SVG = styled.svg`
  width: 11px;
  height: 11px;
`;

const Link = styled.a`
  color: #0c7489;
`;

const defineLocale = (urlParams, setLocale) => {
  let locale = DEFAULT_LOCALE;
  const { lang } = urlParams;
  const navigatorLanguage = (
    navigator.language || navigator.userLanguage
  ).substring(0, 2);

  if (lang) {
    locale = appLocales.includes(lang) ? lang : 'en';
    setLocale(locale);
  } else if (navigatorLanguage !== DEFAULT_LOCALE) {
    locale = appLocales.includes(navigatorLanguage) ? navigatorLanguage : 'en';
    setLocale(locale);
  }

  return locale;
};

export function ChartsPage({
  match,
  intl,
  location,
  load,
  setLocale,
  error,
  loading,
  adsStats,
}) {
  useInjectReducer({ key: 'chartsPage', reducer });
  useInjectSaga({ key: 'chartsPage', saga });

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (!adsStats && !error && !loading) {
      load();
    }
  });

  let sourceData = adsStats;
  const locale = defineLocale(match.params, setLocale);
  const params = new URLSearchParams(location.search);
  const country = params.get('country');
  let datas;

  if (!(error || loading) && adsStats) {
    if (country) {
      sourceData = {
        [country.toUpperCase()]: adsStats[country.toUpperCase()],
      };
    }

    datas = transformDataForChart(
      sourceData,
      intl.messages['app.containers.ChartsPage.apiLabel'],
      intl.messages['app.containers.ChartsPage.reportsLabel'],
    );
  }

  return (
    <ChartsPageWrapper>
      <Hero size="medium">
        <Hero.Body>
          <Container>
            <Title size={2}>
              <FormattedMessage {...messages.header} />
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
      <ExplanationSection>
        <Container>
          <Columns>
            <FirstColumn>
              <FormattedHTMLMessage {...messages.descriptionFirstPart} />
            </FirstColumn>
            <SecondColumn>
              <FormattedHTMLMessage {...messages.descriptionSecondPart} />
            </SecondColumn>
          </Columns>
        </Container>
      </ExplanationSection>
      <ChartSection>
        <Container>
          {loading && !datas && <Spinner white />}
          {datas &&
            datas.map(countryData => (
              <CountryChart key={countryData.title}>
                <Heading align="center" size={5} renderAs="h2">
                  <Link
                    href={`${FB_ADS_REPORT_URL}?country=${countryData.country}`}
                    target="_blank"
                  >
                    {i18NIsoCountries.getName(countryData.title, locale)}&nbsp;
                    <SVG
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                    >
                      <path d="M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z" />
                    </SVG>
                  </Link>
                </Heading>
                <Chart
                  data={countryData.data}
                  messages={intl.messages}
                  locale={locale}
                  country={countryData.country}
                />
              </CountryChart>
            ))}
        </Container>
      </ChartSection>
    </ChartsPageWrapper>
  );
}

ChartsPage.propTypes = {
  match: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  location: PropTypes.object.isRequired,
  adsStats: PropTypes.object,
  setLocale: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adsStats: makeSelectAdsStats(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    setLocale: locale => {
      dispatch(changeLocale(locale));
    },
    load: () => {
      dispatch(loadAdsStats());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(injectIntl(ChartsPage));
