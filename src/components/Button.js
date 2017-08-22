import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, className, colour, ...props }) => (
    <button
        className={`o-button o-type-medium u-bgcolor-${colour} u-color-white ${className}`}
        type="button"
        {...props}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    colour: PropTypes.string.isRequired
};

export default Button;
