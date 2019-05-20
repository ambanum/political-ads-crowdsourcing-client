import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  injectIntl,
  intlShape,
  FormattedMessage,
  FormattedHTMLMessage,
} from 'react-intl';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import Ad from 'components/Ad';
import Spinner from 'components/Spinner';
import styled from 'styled-components';
import {
  Container,
  Hero,
  Section,
  Heading,
  Tag,
  Columns,
  Button,
} from 'react-bulma-components';
import {
  makeSelectAds,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import { loadAds } from './actions';
import saga from './saga';
import messages from './messages';

const AdsCollection = styled.div`
  margin: 1.5em auto;
  column-gap: 1.5em;
  column-count: 3;

  @media screen and (max-width: 960px) {
    column-count: 2;
  }

  @media screen and (max-width: 640px) {
    column-count: 1;
  }
`;

const Explanation = styled.section`
  background: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(0, 0, 0, 0.45);
  font-size: 14px;
`;

const P = styled.p`
  &:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const ExplantationHeading = styled(Heading)`
  &:not(:first-child) {
    margin-top: 2em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const ValueProposition = styled.p`
  text-align: center;
  margin-bottom: 5em;
`;

const MainActionButton = styled(Button)`
  white-space: normal;
  height: auto;
`;

export function Ads({
  ads,
  error,
  intl,
  load,
  loading,
  match: {
    params: { country },
  },
}) {
  useInjectSaga({ key: 'ads', saga });
  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (!ads && !error) {
      load({ country });
    }
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>{intl.messages['app.containers.Ads.title']}</title>
        <meta
          name="description"
          content={intl.messages['app.containers.Ads.title']}
        />
      </Helmet>
      <Hero color="info" gradient size="medium">
        <Hero.Body>
          <Container>
            <StyledHeading>
              <FormattedMessage {...messages.title} />
            </StyledHeading>
          </Container>
        </Hero.Body>
      </Hero>
      <Explanation>
        <Section>
          <Container>
            <ValueProposition>
              <MainActionButton
                color="info"
                renderAs="a"
                href="/ads/fr/crowdsourcing"
                size="large"
              >
                <FormattedHTMLMessage
                  {...messages['description.tryCrowdsourcing']}
                />
              </MainActionButton>
            </ValueProposition>
            <Columns>
              <Columns.Column>
                <ExplantationHeading size={5} renderAs="h2">
                  <FormattedHTMLMessage {...messages['description.what']} />
                </ExplantationHeading>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.whatParagraph']}
                  />
                </P>
                <ExplantationHeading size={5} renderAs="h2">
                  <FormattedHTMLMessage {...messages['description.why']} />
                </ExplantationHeading>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.whyParagraph']}
                  />
                </P>
              </Columns.Column>
              <Columns.Column>
                <ExplantationHeading size={5} renderAs="h2">
                  <FormattedHTMLMessage {...messages['description.how']} />
                </ExplantationHeading>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.howParagraph']}
                  />
                </P>
                <ExplantationHeading size={5} renderAs="h2">
                  <FormattedHTMLMessage
                    {...messages['description.limitations']}
                  />
                </ExplantationHeading>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.limitationsParagraph']}
                  />
                </P>
                <ExplantationHeading size={5} renderAs="h2">
                  <FormattedHTMLMessage {...messages['description.more']} />
                </ExplantationHeading>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.moreParagraph']}
                  />
                </P>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.ourWorkParagraph']}
                  />
                </P>
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
      </Explanation>
      <Section>
        <Container>
          {loading && <Spinner />}
          {!loading && ads && (
            <Tag size="medium">
              {ads && (
                <FormattedHTMLMessage
                  {...messages.counter}
                  values={{
                    count: ads.length,
                  }}
                />
              )}
            </Tag>
          )}
          {!loading && ads && (
            <AdsCollection>
              {ads &&
                ads.map(ad => (
                  <Ad
                    key={ad.id}
                    title={ad.page_name}
                    content={ad.ad_creative_body}
                    pageId={ad.page_id}
                    fundingEntity={ad.funding_entity}
                    impressionsLowerBound={
                      ad.impressions && ad.impressions.lower_bound
                    }
                    impressionsUpperBound={
                      ad.impressions && ad.impressions.upper_bound
                    }
                    spendLowerBound={ad.spend && ad.spend.lower_bound}
                    spendUpperBound={ad.spend && ad.spend.upper_bound}
                    currency={ad.currency}
                  />
                ))}
            </AdsCollection>
          )}
        </Container>
      </Section>
    </React.Fragment>
  );
}

Ads.propTypes = {
  ads: PropTypes.array,
  load: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  intl: intlShape.isRequired,
  loading: PropTypes.bool,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  ads: makeSelectAds(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    load: options => dispatch(loadAds(options)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(injectIntl(Ads));
