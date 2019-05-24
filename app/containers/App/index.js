/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AdsPage from 'containers/AdsPage';
import CrowdsourcingPage from 'containers/CrowdsourcingPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Container, Footer } from 'react-bulma-components';
import styled from 'styled-components';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import GlobalStyle from '../../global-styles';
import logo from '../../images/Logo.png';
import messages from './messages';

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledFooter = styled(Footer)`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 80%;
`;

const StyledImg = styled.img`
  height: 48px;
  margin-top: 2em;
`;

const StyledLinks = styled.p`
  margin-bottom: 2em;
`;

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/political-ads/:country?/crowdsourcing"
          component={CrowdsourcingPage}
        />
        <Route path="/political-ads/:country?" component={AdsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <StyledFooter>
        <StyledContainer>
          <StyledLinks>
            <a href="https://github.com/ambanum/political-ads-legality">
              <FormattedMessage {...messages.sourceCode} />
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="mailto:matti.schneider@diplomatie.gouv.fr">
              <FormattedMessage {...messages.contactUs} />
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="http://disinfo.quaidorsay.fr">
              <FormattedMessage {...messages.ourWork} />
            </a>
          </StyledLinks>
          <p>
            <FormattedHTMLMessage {...messages.values} />
          </p>
          <StyledImg src={logo} alt="Logo" />
        </StyledContainer>
      </StyledFooter>
    </div>
  );
}
