import React, { memo } from 'react';
import 'bulma-tooltip/dist/css/bulma-tooltip.min.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  &:before {
    background: #5c5c5c !important;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.2);
  }

  &:after {
    border-color: #5c5c5c transparent transparent transparent;
  }
`;

function Tooltip({ children, content, position }) {
  const pos = position ? `is-tooltip-${position}` : '';
  return (
    <Wrapper
      className={`tooltip ${pos} is-tooltip-multiline is-tooltip-top-mobile`}
      data-tooltip={content}
    >
      {children}
    </Wrapper>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default memo(Tooltip);
