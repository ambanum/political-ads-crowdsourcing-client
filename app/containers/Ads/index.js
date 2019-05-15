import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import Ad from 'components/Ad';
import styled from 'styled-components';
import { makeSelectAds } from '../App/selectors';
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

const Title = styled.h1`
  font-weight: normal;
`;

const Container = styled.section`
  margin: 0 auto;
  padding: 1em;

  @media screen and (min-width: 1088px) {
    max-width: 960px;
    width: 960px;
  }

  @media screen and (max-width: 1279px) {
    max-width: 1152px;
    width: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1152px;
    width: 1152px;
  }

  @media screen and (min-width: 1472px) {
    max-width: 1344px;
    width: 1344px;
  }
`;

const Counter = styled.h2`
  font-weight: normal;
`;

export function Ads(props) {
  useInjectSaga({ key: 'ads', saga });

  useEffect(() => {
    if (props.error) {
      console.log(props.error);
    }

    if (!props.ads && !props.error) {
      props.load();
    }
  });
  return (
    <Container>
      <Helmet>
        <title>Ads</title>
        <meta
          name="description"
          content="Political and public interest debate ads on Facebook"
        />
      </Helmet>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
      <Counter>
        {props.ads && (
          <FormattedMessage
            {...messages.counter}
            values={{
              count: props.ads.length,
            }}
          />
        )}
      </Counter>
      <AdsCollection>
        {props.ads &&
          props.ads.map(ad => (
            <Ad
              title={ad.page_name}
              content={ad.ad_creative_body}
              pageId={ad.page_id}
              fundingEntity={ad.funding_entity}
              impressionsLowerBound={ad.impressions.lower_bound}
              impressionsUpperBound={ad.impressions.upper_bound}
              spendLowerBound={ad.spend.lower_bound}
              spendUpperBound={ad.spend.upper_bound}
              currency={ad.currency}
            />
          ))}
      </AdsCollection>
    </Container>
  );
}

Ads.propTypes = {
  ads: PropTypes.array,
  load: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  ads: makeSelectAds(),
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
)(Ads);
