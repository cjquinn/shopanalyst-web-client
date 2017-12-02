import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children }) => (
    <div className="c-header u-1/1 u-baseline-x3 u-bgcolor-foreground u-fixed u-flex u-ai-center u-z">
        <div className="o-container u-relative u-1/1">
            {children}
        </div>
    </div>
);

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Header;
