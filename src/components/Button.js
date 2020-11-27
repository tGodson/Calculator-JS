/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    name, handleClick,
  } = props;
  return (
    <button type="button" onClick={() => handleClick(name)}>
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};
export default Button;