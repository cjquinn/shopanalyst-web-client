import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children }) => (
    <button className="c-button o-type-medium u-1/1 u-ph" type="submit">
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired
};

export default Button;
