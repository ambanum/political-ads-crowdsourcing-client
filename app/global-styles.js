import './fonts/fontello.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: -apple-system, BlinkMacSystemFont, "helvetica neue", helvetica, roboto, noto, "segoe ui", arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  hr {
    height: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #27262b;
  }

  a.linkified {
    color: #385898 !important;
    cursor: pointer;
    text-decoration: none;
  }

  a.linkified:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
