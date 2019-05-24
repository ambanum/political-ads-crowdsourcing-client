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
  margin-left: calc(-1em - 1px);
  margin-right: calc(-1em - 1px);
  margin-top: 1em;
`;

const NoMedia = styled.div`
  background: #fafafa;
  margin-top: 1em;
  padding: 5em 1em;
  font-size: 12px;
  border-radius: 3px;
  color: #5c5962;
  text-align: center;
  margin-bottom: 1em;
`;

const Separation = styled.hr`
  margin: 0 -1em;
  border: none;
  border-top: 1px solid #e9eaeb;
`;

const MetaData = styled.div`
  margin-top: 1em;
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

const Avatar = styled.img`
  with: 42px;
  height: 42px;
  margin-right: 8px;
  border: 1px solid #e9eaeb;
  border-radius: 100%;
`;

const Header = styled.div`
  display: flex;
`;

const CTA = styled.a`
  display: block;
  margin-left: -1em;
  margin-right: -1em;
  padding: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const CTADescription = styled.p`
  color: #606770;
`;

const CTADomain = styled.p`
  margin-top: 0.5em;
  color: #606770;
  text-transform: uppercase;
  font-size: 12px;
`;

const Picture = styled.img`
  width: 100%;
`;
const Video = styled.video``;

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
  className,
  snapshot,
  ctaLink,
  ctaTitle,
  ctaDescription,
  ctaLinkDomain,
}) {
  const pageLink = `https://www.facebook.com/${pageId}`;

  return (
    <Wrapper className={className}>
      {!loading && (
        <Header>
          {snapshot && snapshot.page_profile_picture_url && (
            <Avatar src={snapshot.page_profile_picture_url} alt="" />
          )}
          <div>
            <Title>
              <Link href={pageLink} target="_blank">
                {title}
              </Link>
            </Title>
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
          </div>
        </Header>
      )}
      {!loading && (
        <React.Fragment>
          {content && (
            <div dangerouslySetInnerHTML={{ __html: linkifyHtml(content) }} />
          )}
          {snapshot && (
            <Media>
              {snapshot.media.images[0] && (
                <Picture
                  src={snapshot.media.images[0].original_image_url}
                  alt=""
                />
              )}
              {snapshot.media.videos[0] && (
                <Video
                  controls
                  poster={snapshot.media.videos[0].video_preview_image_url}
                  height="100%"
                  loop=""
                  src={snapshot.media.videos[0].video_sd_url}
                  width="100%"
                />
              )}
            </Media>
          )}
          {!snapshot && (
            <NoMedia>
              <FormattedHTMLMessage {...messages.cantDisplayMedia} />
            </NoMedia>
          )}
          {ctaLink && (
            <CTA href={ctaLink} target="_blank">
              <p>
                <strong>{ctaTitle || title}</strong>
              </p>
              <CTADescription>{ctaDescription}</CTADescription>
              <CTADomain>{ctaLinkDomain}</CTADomain>
            </CTA>
          )}
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
