import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children }) => (
    <button className="c-button o-type-medium u-1/1 u-baseline-x3 u-ph u-bradius-x3" type="submit">
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired
};

export default Button;
