import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ children, side, to }) => (
    <Link
        className={`c-header-link c-header-link--${side} o-circle u-hover-success u-absolute u-flex u-ai-center u-jc-center u-bradius-100`}
        to={to}
    >
        {children}
    </Link>
);

HeaderLink.propTypes = {
    children: PropTypes.node.isRequired,
    side: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default HeaderLink;
