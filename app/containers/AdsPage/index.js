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
  makeSelectCounts,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import { loadAds } from './actions';
import { loadCounts } from '../App/actions';
import { numberWithSpaces } from '../App/utils';
import saga from './saga';
import messages from './messages';

const StyledHero = styled(Hero)`
  background-color: #4934a2 !important;
  background-image: linear-gradient(325deg, #54318c 0%, #4934a2 74%);
`;

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

const Explanation = styled(Section)`
  background: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
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

const ExplanationHeading = styled(Heading)`
  &:not(:first-child) {
    margin-top: 2em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const ValueProposition = styled.p`
  text-align: center;
`;

const MainActionButton = styled(Button)`
  max-width: 20em;
  white-space: normal;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
`;

function checkNested(obj, level, ...rest) {
  if (obj === undefined) return false;
  if (rest.length == 0 && obj.hasOwnProperty(level)) return true;
  return checkNested(obj[level], ...rest);
}

export function Ads({ ads, error, intl, load, loading, counts }) {
  useInjectSaga({ key: 'ads', saga });
  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (!(loading || ads || counts.adsCount || error)) {
      load();
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
      <StyledHero color="info" size="medium">
        <Hero.Body>
          <Container>
            <StyledHeading>
              <FormattedMessage {...messages.title} />
            </StyledHeading>
          </Container>
        </Hero.Body>
      </StyledHero>
      <Section>
        <Container>
          <ValueProposition>
            <MainActionButton
              color="info"
              renderAs="a"
              href="/political-ads/fr/crowdsourcing"
              size="large"
            >
              <FormattedHTMLMessage
                {...messages['description.tryCrowdsourcing']}
                values={{
                  total: numberWithSpaces(counts.adsCount),
                }}
              />
            </MainActionButton>
          </ValueProposition>
        </Container>
      </Section>
      <Explanation>
        <Container>
          <Columns>
            <Columns.Column>
              <ExplanationHeading size={5} renderAs="h2">
                <FormattedHTMLMessage {...messages['description.what']} />
              </ExplanationHeading>
              <P>
                <FormattedHTMLMessage
                  {...messages['description.whatParagraph']}
                />
              </P>
              <ExplanationHeading size={5} renderAs="h2">
                <FormattedHTMLMessage {...messages['description.why']} />
              </ExplanationHeading>
              <P>
                <FormattedHTMLMessage
                  {...messages['description.whyParagraph']}
                />
              </P>
              <P>
                <FormattedHTMLMessage {...messages['description.dumpAccess']} />
              </P>
            </Columns.Column>
            <Columns.Column>
              <ExplanationHeading size={5} renderAs="h2">
                <FormattedHTMLMessage {...messages['description.how']} />
              </ExplanationHeading>
              <P>
                <FormattedHTMLMessage
                  {...messages['description.howParagraph']}
                />
              </P>
              <ExplanationHeading size={5} renderAs="h2">
                <FormattedHTMLMessage
                  {...messages['description.limitations']}
                />
              </ExplanationHeading>
              <P>
                <FormattedHTMLMessage
                  {...messages['description.limitationsParagraph']}
                />
              </P>
              <ExplanationHeading size={5} renderAs="h2">
                <FormattedHTMLMessage {...messages['description.more']} />
              </ExplanationHeading>
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
                    total: numberWithSpaces(counts.adsCount),
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
                    snapshot={ad.snapshot}
                    ctaLink={
                      checkNested(
                        ad,
                        'snapshot',
                        'react_component',
                        'props',
                        'adCard',
                        'snapshot',
                        'link_url',
                      ) &&
                      ad.snapshot.react_component.props.adCard.snapshot.link_url
                    }
                    ctaTitle={ad.ad_creative_link_title}
                    ctaDescription={ad.ad_creative_link_description}
                    ctaLinkDomain={ad.ad_creative_link_caption}
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
  counts: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  ads: makeSelectAds(),
  counts: makeSelectCounts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    load: () => {
      dispatch(loadCounts());
      dispatch(loadAds());
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
)(injectIntl(Ads));
