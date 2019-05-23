import React, { memo } from 'react';
import PropTypes from 'prop-types';
import 'react-tippy/dist/tippy.css';
import { Tooltip as Tippy } from 'react-tippy';

function Tooltip({ children, content }) {
  return (
    <Tippy
      title={content}
      position="top"
      trigger="mouseenter"
      touchHold
      arrow
      delay="300"
      hideDelay="0"
      duration="200"
      size="small"
      theme="light"
    >
      {children}
    </Tippy>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
};

export default memo(Tooltip);
