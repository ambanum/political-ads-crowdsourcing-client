import { injectIntl, intlShape } from 'react-intl';
import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import Ad from 'components/Ad';
import Spinner from 'components/Spinner';
import styled from 'styled-components';
import {
  Container,
  Section,
  Button,
  Heading,
  Tag,
} from 'react-bulma-components';
import {
  makeSelectAnnotations,
  makeSelectCounts,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import { loadAnnotations } from './actions';
import saga from './saga';

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

const Filters = styled(Section)`
  background: #f4f4f4;
  border-bottom: 1px solid #ddd;
`;

function checkNested(obj, level, ...rest) {
  if (obj === undefined) return false;
  if (rest.length == 0 && obj.hasOwnProperty(level)) return true;
  return checkNested(obj[level], ...rest);
}

export function AnnotationsPage({ annotations, error, load, loading, match, location }) {
  const params = new URLSearchParams(location.search);
  let limit = params.get('limit') || 2000;
  const skip = params.get('skip') || 0;

  useInjectSaga({ key: 'ads', saga });
  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (!(loading || annotations || error)) {
      const { type } = match.params;
      if (!type) {
        limit = params.get('limit') || 100;
      }
      load({ type, skip, limit });
    }
  });

  return (
    <React.Fragment>
      <Filters>
        <Container>
          <Heading size={4} renderAs="h4">
            Filters
          </Heading>
          <div className="buttons">
            <Button
              renderAs="a"
              color="success"
              href="/political-ads/annotations/nothing-suspect?limit=200"
            >
              nothing-suspect
            </Button>
            <Button
              renderAs="a"
              color="primary"
              href="/political-ads/annotations/cant-say?limit=200"
            >
              cant-say
            </Button>
            <Button
              renderAs="a"
              color="primary"
              href="/political-ads/annotations/not-related-to-politics?limit=200"
            >
              not-related-to-politics
            </Button>
            <Button
              renderAs="a"
              color="danger"
              href="/political-ads/annotations/survey?limit=200"
            >
              survey
            </Button>
            <Button
              renderAs="a"
              color="danger"
              href="/political-ads/annotations/promotes-candidates?limit=200"
            >
              promotes-candidates
            </Button>
            <Button
              renderAs="a"
              color="danger"
              href="/political-ads/annotations/new-controversial-element?limit=200"
            >
              new-controversial-element
            </Button>
          </div>
        </Container>
      </Filters>
      <Section>
        <Container>
          {annotations && (
            <div className="tags">
              <Tag color="light" size="medium">Total annotations {annotations.pagination.total}</Tag>
              <Tag color="light" size="medium">Total displayed {annotations.results.length}</Tag>
            </div>
          )}
          {loading && <Spinner />}
          {!loading && annotations && (
            <AdsCollection>
              {annotations.results.map(annotation => (
                <React.Fragment>
                  <Ad
                    // eslint-disable-next-line no-underscore-dangle
                    key={annotation._id}
                    adId={annotation.adId}
                    title={annotation.ad.page_name}
                    content={annotation.ad.ad_creative_body}
                    pageId={annotation.ad.page_id}
                    fundingEntity={annotation.ad.funding_entity}
                    impressionsLowerBound={
                      annotation.ad.impressions &&
                      annotation.ad.impressions.lower_bound
                    }
                    impressionsUpperBound={
                      annotation.ad.impressions &&
                      annotation.ad.impressions.upper_bound
                    }
                    spendLowerBound={
                      annotation.ad.spend && annotation.ad.spend.lower_bound
                    }
                    spendUpperBound={
                      annotation.ad.spend && annotation.ad.spend.upper_bound
                    }
                    currency={annotation.ad.currency}
                    snapshot={annotation.ad.snapshot}
                    ctaLink={
                      checkNested(
                        annotation.ad,
                        'snapshot',
                        'react_component',
                        'props',
                        'adCard',
                        'snapshot',
                        'link_url',
                      ) &&
                      annotation.ad.snapshot.react_component.props.adCard
                        .snapshot.link_url
                    }
                    ctaTitle={annotation.ad.ad_creative_link_title}
                    ctaDescription={annotation.ad.ad_creative_link_description}
                    ctaLinkDomain={annotation.ad.ad_creative_link_caption}
                    annotation={annotation.payload.value}
                  />
                </React.Fragment>
              ))}
            </AdsCollection>
          )}
        </Container>
      </Section>
    </React.Fragment>
  );
}

AnnotationsPage.propTypes = {
  annotations: PropTypes.array,
  load: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loading: PropTypes.bool,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  annotations: makeSelectAnnotations(),
  counts: makeSelectCounts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    load: options => {
      dispatch(loadAnnotations(options));
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
)(injectIntl(AnnotationsPage));
