import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: block;
  width: 64px;
  height: 64px;
  margin: auto;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 1px;
    border-radius: 50%;
    border: 2px solid #428dec;
    border-color: ${props =>
      props.white
        ? '#fff transparent #fff transparent'
        : '#428dec transparent #428dec transparent'};
    animation: ${rotate} 1.2s linear infinite;
  }
`;

function Spinner(props) {
  return <Wrapper {...props} />;
}

Spinner.propTypes = {};

export default memo(Spinner);
