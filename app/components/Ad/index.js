import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import linkifyHtml from 'linkifyjs/html';
import Spinner from 'components/Spinner';
import messages from './messages';
import { prettifyImpressions, prettifySpend } from './helpers';

const Wrapper = styled.div`
  margin-bottom: 1.5em;
  line-height: 1.5;
  padding: 1em;
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  border: 1px solid rgba(10, 10, 10, 0.1);
  font-size: 14px;
  break-inside: avoid;
  background: #fff;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

const Subtitle = styled.h4`
  margin-bottom: 1em;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  color: #606770;
`;

const Light = styled.span`
  font-weight: normal;
`;

const Link = styled.a`
  color: #385898;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Media = styled.div`
  background: #fafafa;
  margin-top: 1em;
  padding: 5em 1em;
  font-size: 12px;
  border-radius: 3px;
  color: #5c5962;
  text-align: center;
`;

const Separation = styled.hr`
  margin: 1em -1em;
  border: none;
  border-top: 1px solid #e9eaeb;
`;

const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Impressions = styled.div``;

const Spend = styled.div``;

const Number = styled.div`
  font-size: 16px;
  color: #27262b;
  min-height: 1.5em;
`;

const MetaDataTitle = styled.span`
  font-size: 12px;
  color: #777;
`;

const StyledSpinner = styled(Spinner)`
  margin: 8em auto;
`;

function Ad({
  title,
  content,
  pageId,
  fundingEntity,
  impressionsLowerBound,
  impressionsUpperBound,
  spendLowerBound,
  spendUpperBound,
  currency,
  loading,
}) {
  const pageLink = `https://www.facebook.com/${pageId}`;
  return (
    <Wrapper>
      {!loading && (
        <Title>
          <Link href={pageLink} target="_blank">
            {title}
          </Link>
        </Title>
      )}
      {!loading && (
        <Subtitle>
          <FormattedMessage {...messages.sponsored} />
          <React.Fragment>
            &nbsp;•&nbsp;
            {fundingEntity && (
              <React.Fragment>
                <Light>
                  <FormattedMessage {...messages.sponsoredBy} />
                </Light>{' '}
                {fundingEntity}
              </React.Fragment>
            )}
            {!fundingEntity && (
              <React.Fragment>
                <Light>
                  <FormattedMessage {...messages.notSpecifiedSponsor} />
                </Light>
              </React.Fragment>
            )}
          </React.Fragment>
        </Subtitle>
      )}
      {content && !loading && (
        <React.Fragment>
          <div dangerouslySetInnerHTML={{ __html: linkifyHtml(content) }} />
          <Media>
            <FormattedHTMLMessage {...messages.cantDisplayMedia} />
          </Media>
        </React.Fragment>
      )}
      {loading && <StyledSpinner />}
      <Separation />
      <MetaData>
        <Impressions>
          <Number>
            {!loading &&
              prettifyImpressions(impressionsLowerBound, impressionsUpperBound)}
          </Number>
          <MetaDataTitle>
            <FormattedMessage {...messages.impressions} />
          </MetaDataTitle>
        </Impressions>
        <Spend>
          <Number>
            {!loading &&
              prettifySpend(spendLowerBound, spendUpperBound, currency)}
          </Number>
          <MetaDataTitle>
            <FormattedMessage {...messages.amountSpent} />
          </MetaDataTitle>
        </Spend>
      </MetaData>
    </Wrapper>
  );
}

Ad.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  pageId: PropTypes.string,
  fundingEntity: PropTypes.string,
  impressionsLowerBound: PropTypes.string,
  impressionsUpperBound: PropTypes.string,
  spendLowerBound: PropTypes.string,
  spendUpperBound: PropTypes.string,
  currency: PropTypes.string,
  loading: PropTypes.bool,
};

export default memo(Ad);
