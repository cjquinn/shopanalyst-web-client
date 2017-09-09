import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children }) => (
    <div className="header u-bgcolor-off-white u-fixed u-pv u-width-full u-z-2">
        <h1 className="o-type-medium u-text-center u-weight-normal">
            {children}
        </h1>
    </div>
);

Header.propTypes = {
    children: PropTypes.node.isRequired
};

export default Header;
