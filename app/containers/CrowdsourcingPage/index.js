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
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Ad from 'components/Ad';
import Tooltip from 'components/Tooltip';
import styled from 'styled-components';
import {
  Container,
  Hero,
  Section,
  Heading,
  Columns,
  Button,
} from 'react-bulma-components';
import { makeSelectAd, makeSelectLoading, makeSelectError } from './selectors';
import { loadAd, classifyAd } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { CLASSIFICATION_TYPES } from './constants';

const StyledHeading = styled(Heading)`
  text-align: center;
  font-weight: normal;
  margin: 1em auto;
`;

const StyledButton = styled(Button)`
  margin-bottom: 1em;
  white-space: initial;
  height: auto;
  min-height: 5em;
`;

const Wrapper = styled.div`
  color: #4a4a4a;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const LoadNewAdWrapper = styled.div`
  text-align: center;
`;

const Explanation = styled(Section)`
  background: #fafafa;
  border-top: 1px solid rgba(0, 0, 0, 0.45);
`;

const Back = styled.a`
  display: inline-block;
  margin-bottom: 1em;
`;

export function CrowdsourcingPage({
  error,
  load,
  ad,
  loading,
  classify,
  intl,
}) {
  useInjectReducer({ key: 'crowdsourcingPage', reducer });
  useInjectSaga({ key: 'crowdsourcingPage', saga });

  // eslint-disable-next-line no-param-reassign
  ad = ad || {};

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (!ad.id && !error && !loading) {
      load();
    }
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>{intl.messages[messages.header.id]}</title>
        <meta name="description" content={intl.messages[messages.header.id]} />
      </Helmet>
      <Hero color="info" gradient>
        <Hero.Body>
          <Container>
            <StyledHeading>
              <FormattedMessage {...messages.header} />
            </StyledHeading>
          </Container>
        </Hero.Body>
      </Hero>
      <Explanation>
        <Container>
          <Back href="/ads">
            <FormattedMessage {...messages.back} />
          </Back>
          <p>
            <FormattedHTMLMessage {...messages.explanation} />
          </p>
        </Container>
      </Explanation>
      <Wrapper>
        <Section>
          <Container>
            <Columns>
              <Columns.Column size="one-quarter">
                <Tooltip
                  position="right"
                  content={intl.messages[messages.nothingSuspectDetails.id]}
                >
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    outlined
                    color="success"
                    disabled={loading}
                    onClick={() =>
                      classify(CLASSIFICATION_TYPES.NOTHING_SUSPECT)
                    }
                  >
                    <FormattedMessage {...messages.nothingSuspect} />
                  </StyledButton>
                </Tooltip>
                <Tooltip
                  position="right"
                  content={
                    intl.messages[messages.notRelatedToPoliticsDetails.id]
                  }
                >
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    outlined
                    disabled={loading}
                    color="primary"
                    onClick={() =>
                      classify(
                        CLASSIFICATION_TYPES.NOT_RELATED_TO_POLITICS_OR_ISSUES_OF_NATIONAL_IMPORTANCE,
                      )
                    }
                  >
                    <FormattedMessage {...messages.notRelatedToPolitics} />
                  </StyledButton>
                </Tooltip>
                <Tooltip
                  position="right"
                  content={intl.messages[messages.cantSayDetails.id]}
                >
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    color="primary"
                    outlined
                    disabled={loading}
                    onClick={() => classify(CLASSIFICATION_TYPES.CANT_SAY)}
                  >
                    <FormattedMessage {...messages.cantSay} />
                  </StyledButton>
                </Tooltip>
              </Columns.Column>
              <Columns.Column size="half">
                <React.Fragment>
                  <Ad
                    loading={loading}
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
                </React.Fragment>
                <LoadNewAdWrapper>
                  <Button rounded onClick={load} disabled={loading}>
                    <FormattedMessage {...messages.displayNewAd} />
                  </Button>
                </LoadNewAdWrapper>
              </Columns.Column>
              <Columns.Column size="one-quarter">
                <Tooltip
                  position="left"
                  content={intl.messages[messages.promotesCandidateDetails.id]}
                >
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    outlined
                    disabled={loading}
                    color="danger"
                    onClick={() =>
                      classify(CLASSIFICATION_TYPES.PROMOTES_A_CANDIDATE)
                    }
                  >
                    <FormattedMessage {...messages.promotesCandidate} />
                  </StyledButton>
                </Tooltip>
                <Tooltip
                  position="left"
                  content={intl.messages[messages.newControversialDetails.id]}
                >
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    outlined
                    disabled={loading}
                    color="danger"
                    onClick={() =>
                      classify(
                        CLASSIFICATION_TYPES.INTRODUCES_OF_A_NEW_CONTROVERSIAL_ELEMENT,
                      )
                    }
                  >
                    <FormattedMessage {...messages.newControversial} />
                  </StyledButton>
                </Tooltip>
                <Tooltip
                  position="left"
                  content={intl.messages[messages.containsSurveyDetails.id]}
                >
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    outlined
                    disabled={loading}
                    color="danger"
                    onClick={() => classify(CLASSIFICATION_TYPES.SURVEY)}
                  >
                    <FormattedMessage {...messages.containsSurvey} />
                  </StyledButton>
                </Tooltip>
              </Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column>
                <FormattedHTMLMessage {...messages.dataCollected} />
              </Columns.Column>
              <Columns.Column>
                <FormattedHTMLMessage {...messages.askForData} />
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
      </Wrapper>
    </React.Fragment>
  );
}

CrowdsourcingPage.propTypes = {
  load: PropTypes.func.isRequired,
  classify: PropTypes.func.isRequired,
  ad: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  intl: intlShape.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ad: makeSelectAd(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    load: options => dispatch(loadAd(options)),
    classify: value => dispatch(classifyAd(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(injectIntl(CrowdsourcingPage));
