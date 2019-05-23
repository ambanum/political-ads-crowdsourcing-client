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
  Section,
  Hero,
  Heading,
  Columns,
  Button,
} from 'react-bulma-components';
import {
  makeSelectAd,
  makeSelectCounts,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadAd, loadCounts, classifyAd } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { CLASSIFICATION_TYPES } from './constants';

const Title = styled(Heading)`
  text-align: center;
  font-weight: 900;
  line-height: 1.5;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 12px !important;
`;

const SupTitle = styled(Heading)`
  text-align: center;
  font-weight: 300;
  line-height: 1.5;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  font-size: 24px !important;
  margin-bottom: 12px !important;
`;

const Subtitle = styled(Title)`
  font-weight: 400;
  margin-bottom: 1em;
`;

const StyledButton = styled(Button)`
  position: relative;
  flex-direction: column;
  margin-bottom: 1em;
  white-space: initial;
  color: #212121 !important;
  padding-left: 0.5em;
  padding-right: 0.5em;
  height: auto;
  min-height: 5em;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;

  @media screen and (max-width: 768px) {
    min-height: 3em;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const HelpWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .icon-fontello {
    color: rgba(0, 0, 0, 0.3);
    font-size: 70%;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 40px;

    & .icon-fontello {
      font-size: 120%;
    }
  }
`;

const HelpWrapperLeft = styled(HelpWrapper)`
  left: 0;
`;

const HelpWrapperRight = styled(HelpWrapper)`
  right: 0;
`;

const Wrapper = styled.div`
  color: #4a4a4a;
`;

const LoadNewAdWrapper = styled.div`
  text-align: center;
`;

const HeadSection = styled(Section)`
  padding-top: 1em;
  padding-bottom: 1em;
`;

const HeadContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;


  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const Link = styled.a`
  display: inline-block;
  position: relative;
  font-size: 80%;
  color: #fff !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);

  &:not(:last-child) {
    margin-right: 1em;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`;

const StyledColumn = styled(Columns.Column)`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const StyledHero = styled(Hero)`
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
`;

const StyledHeroBody = styled(Hero.Body)`
  padding: 2rem 1.5rem;
`;

const StyledAd = styled(Ad)`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;
`;

const LoadNewButton = styled(Button)`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
`;

const InfoWrapper = styled.div`
  font-size: 75%;
  color: #fafafa;
  ${'' /* text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); */}
  text-align: center;
  margin-top: 2em;
`;

const Info = styled.span`
  position: relative;
  z-index: 1;
  margin: 0 0.5em;
`;

const Quiet = styled.span`
  font-size: 11px;
`;

const Counters = styled.div`
  font-size: 200%;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  display: flex;

  @media screen and (max-width: 768px) {
    margin-top: 1em;
    justify-content: center;
  }
`;

const Separator = styled.span`
  display: inline-block;
  margin: 0 0.25em;
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    bottom: -10px;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.45);
  }
`;

const AdsCounter = styled.span`
  font-weight: 200;
`;

const AnnotationsCounter = styled.span`
  font-weight: 900;
`;

const CountersText = styled.span`
  font-size: 11px;
  font-weight: 700;
  font-variant: all-petite-caps;
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CounterWrapperLeft = styled(CounterWrapper)`
  text-align: right;
  & {
    position: relative;
  }
`;

const ShareContainer = styled.div`
  display: block;
`;

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function CrowdsourcingPage({
  error,
  load,
  ad,
  loading,
  classify,
  intl,
  counts,
}) {
  useInjectReducer({ key: 'crowdsourcingPage', reducer });
  useInjectSaga({ key: 'crowdsourcingPage', saga });

  // eslint-disable-next-line no-param-reassign
  ad = ad || {};
  console.log(counts);
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
      <StyledHero color="info" size="fullheight">
        <Hero.Head>
          <HeadSection>
            <HeadContainer>
              <ShareContainer>
                <Link href="/ads">
                  <FormattedMessage {...messages.back} />
                </Link>
                <Link
                  href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdisinfo.quaidorsay.fr%2Fads%2Fcrowdsourcing"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="icon-fontello icon-fontello-facebook" />
                  &nbsp;<FormattedMessage {...messages.shareFriends} />
                </Link>
                <Link
                  href="https://twitter.com/intent/tweet/?text=Plusieurs%20milliers%20de%20%23publicit%C3%A9s%20politiques%20ont%20%C3%A9t%C3%A9%20diffus%C3%A9es%20pendant%20les%20%23EUElections2019.%20Certaines%20sont%20peut-%C3%AAtre%20ill%C3%A9gales.%20Trouvez-les%20!%20%F0%9F%91%80%20%23crowdsourcing&amp;url=https%3A%2F%2Fdisinfo.quaidorsay.fr%2Fads%2Fcrowdsourcing"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="icon-fontello icon-fontello-twitter" />
                  &nbsp;<FormattedMessage {...messages.shareCommunity} />
                </Link>
              </ShareContainer>
              {counts.annotationsCount && counts.adsCount && (
                <Counters>
                  <CounterWrapperLeft>
                    <AnnotationsCounter>
                      {numberWithSpaces(counts.annotationsCount)}
                    </AnnotationsCounter>
                    <CountersText>
                      <FormattedMessage {...messages.evaluated} />
                    </CountersText>
                  </CounterWrapperLeft>
                  <Separator />
                  <CounterWrapperLeft>
                    <AdsCounter>{numberWithSpaces(counts.adsCount)}</AdsCounter>
                    <CountersText>
                      <FormattedMessage {...messages.totalAds} />
                    </CountersText>
                  </CounterWrapperLeft>
                </Counters>
              )}
            </HeadContainer>
          </HeadSection>
        </Hero.Head>
        <StyledHeroBody>
          <Container>
            <Columns>
              <Columns.Column>
                <SupTitle renderAs="h2">
                  <FormattedHTMLMessage {...messages.supTitle} />
                </SupTitle>
                <Title>
                  <FormattedHTMLMessage {...messages.header} />
                </Title>
              </Columns.Column>
            </Columns>
            <Wrapper>
              <Columns>
                <StyledColumn size="one-quarter">
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    size="medium"
                    color="success"
                    onClick={() => {
                      classify(CLASSIFICATION_TYPES.NOTHING_SUSPECT);
                    }}
                  >
                    <HelpWrapperLeft>
                      <Tooltip
                        content={
                          intl.messages[messages.nothingSuspectDetails.id]
                        }
                      >
                        <i className="icon-fontello icon-fontello-help-circled" />
                      </Tooltip>
                    </HelpWrapperLeft>
                    <FormattedMessage {...messages.nothingSuspect} />
                    <Quiet>
                      <FormattedMessage {...messages.nothingSuspectQuiet} />
                    </Quiet>
                  </StyledButton>
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    size="medium"
                    color="primary"
                    onClick={() => {
                      classify(
                        CLASSIFICATION_TYPES.NOT_RELATED_TO_POLITICS_OR_ISSUES_OF_NATIONAL_IMPORTANCE,
                      );
                    }}
                  >
                    <HelpWrapperLeft>
                      <Tooltip
                        content={
                          intl.messages[messages.notRelatedToPoliticsDetails.id]
                        }
                      >
                        <i className="icon-fontello icon-fontello-help-circled" />
                      </Tooltip>
                    </HelpWrapperLeft>
                    <FormattedMessage {...messages.notRelatedToPolitics} />
                    <Quiet>
                      <FormattedMessage
                        {...messages.notRelatedToPoliticsQuiet}
                      />
                    </Quiet>
                  </StyledButton>
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    size="medium"
                    color="primary"
                    onClick={() => {
                      classify(CLASSIFICATION_TYPES.CANT_SAY);
                    }}
                  >
                    <HelpWrapperLeft>
                      <Tooltip
                        content={intl.messages[messages.cantSayDetails.id]}
                      >
                        <i className="icon-fontello icon-fontello-help-circled" />
                      </Tooltip>
                    </HelpWrapperLeft>
                    <FormattedMessage {...messages.cantSay} />
                  </StyledButton>
                </StyledColumn>
                <Columns.Column size="half">
                  <React.Fragment>
                    <StyledAd
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
                    <LoadNewButton
                      rounded
                      onClick={load}
                      size="small"
                      color="dark"
                      inverted
                      outlined
                    >
                      <FormattedMessage {...messages.displayNewAd} />
                    </LoadNewButton>
                  </LoadNewAdWrapper>
                </Columns.Column>
                <Columns.Column size="one-quarter">
                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    size="medium"
                    color="danger"
                    onClick={() => {
                      classify(CLASSIFICATION_TYPES.PROMOTES_A_CANDIDATE);
                    }}
                  >
                    <HelpWrapperRight>
                      <Tooltip
                        content={
                          intl.messages[messages.promotesCandidateDetails.id]
                        }
                      >
                        <i className="icon-fontello icon-fontello-help-circled" />
                      </Tooltip>
                    </HelpWrapperRight>
                    <FormattedMessage {...messages.promotesCandidate} />
                    <Quiet>
                      <FormattedMessage {...messages.promotesCandidateQuiet} />
                    </Quiet>
                  </StyledButton>

                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    size="medium"
                    color="danger"
                    onClick={() => {
                      classify(
                        CLASSIFICATION_TYPES.INTRODUCES_OF_A_NEW_CONTROVERSIAL_ELEMENT,
                      );
                    }}
                  >
                    <HelpWrapperRight>
                      <Tooltip
                        content={
                          intl.messages[messages.newControversialDetails.id]
                        }
                      >
                        <i className="icon-fontello icon-fontello-help-circled" />
                      </Tooltip>
                    </HelpWrapperRight>
                    <FormattedMessage {...messages.newControversial} />
                    <Quiet>
                      <FormattedMessage {...messages.newControversialQuiet} />
                    </Quiet>
                  </StyledButton>

                  <StyledButton
                    tabIndex="0"
                    fullwidth
                    size="medium"
                    color="danger"
                    onClick={() => classify(CLASSIFICATION_TYPES.SURVEY)}
                  >
                    <HelpWrapperRight>
                      <Tooltip
                        content={
                          intl.messages[messages.containsSurveyDetails.id]
                        }
                      >
                        <i className="icon-fontello icon-fontello-help-circled" />
                      </Tooltip>
                    </HelpWrapperRight>
                    <FormattedMessage {...messages.containsSurvey} />
                  </StyledButton>
                </Columns.Column>
              </Columns>
              <Subtitle size={6} renderAs="h2">
                <FormattedHTMLMessage {...messages.explanation} />
              </Subtitle>
              <InfoWrapper>
                <Tooltip
                  content={intl.messages[messages.dataCollected.id]}
                  interactive
                  interactiveBorder={10}
                >
                  <Info>
                    <FormattedMessage {...messages.dataCollectedInfo} />
                    &nbsp;
                    <i className="icon-fontello icon-fontello-info-circled" />
                  </Info>
                </Tooltip>
                <Tooltip
                  content={intl.messages[messages.askForData.id]}
                  interactive
                  interactiveBorder={10}
                >
                  <Info>
                    <FormattedMessage {...messages.askForDataInfo} />
                    &nbsp;
                    <i className="icon-fontello icon-fontello-info-circled" />
                  </Info>
                </Tooltip>
              </InfoWrapper>
            </Wrapper>
          </Container>
        </StyledHeroBody>
      </StyledHero>
    </React.Fragment>
  );
}

CrowdsourcingPage.propTypes = {
  load: PropTypes.func.isRequired,
  classify: PropTypes.func.isRequired,
  ad: PropTypes.object,
  counts: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  intl: intlShape.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ad: makeSelectAd(),
  counts: makeSelectCounts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    load: options => {
      dispatch(loadAd(options));
      dispatch(loadCounts(options));
    },
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
