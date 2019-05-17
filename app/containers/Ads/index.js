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
import styled from 'styled-components';
import {
  Container,
  Hero,
  Section,
  Heading,
  Tag,
  Columns,
} from 'react-bulma-components';
import {
  makeSelectAds,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import { loadAds } from '../App/actions';
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
  background: #f7f7f7;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(0, 0, 0, 0.45);
  font-size: 14px;
`;

const P = styled.p`
  &:not(:last-child) {
    margin-bottom: 3em;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

export function Ads({ ads, error, intl, load, loading }) {
  useInjectSaga({ key: 'ads', saga });
  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (!ads && !error) {
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
            <Columns>
              <Columns.Column>
                <Heading size={5} renderAs="h2">
                  <FormattedHTMLMessage {...messages['description.what']} />
                </Heading>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.whatParagraph']}
                  />
                </P>
                <Heading size={5} renderAs="h2">
                  <FormattedHTMLMessage {...messages['description.why']} />
                </Heading>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.whyParagraph']}
                  />
                </P>
                <Heading size={5} renderAs="h2">
                  <FormattedHTMLMessage {...messages['description.how']} />
                </Heading>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.howParagraph']}
                  />
                </P>
              </Columns.Column>
              <Columns.Column>
                <Heading size={5} renderAs="h2">
                  <FormattedHTMLMessage
                    {...messages['description.limitations']}
                  />
                </Heading>
                <P>
                  <FormattedHTMLMessage
                    {...messages['description.limitationsParagraph']}
                  />
                </P>
                <Heading size={5} renderAs="h2">
                  <FormattedHTMLMessage {...messages['description.more']} />
                </Heading>
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
          {loading && <div className="lds-dual-ring" />}
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
                ads.map((ad, index) => (
                  <Ad
                    key={index}
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
};

const mapStateToProps = createStructuredSelector({
  ads: makeSelectAds(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(loadAds()),
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
