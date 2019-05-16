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

  .lds-dual-ring {
    display: block;
    width: 64px;
    height: 64px;
    margin: auto;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 2px solid #428DEC;
    border-color: #428DEC transparent #428DEC transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyle;
