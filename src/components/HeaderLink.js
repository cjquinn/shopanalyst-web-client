import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ children, side, to }) => (
    <Link
        className={`c-header-link c-header-link--${side} u-absolute u-flex u-ai-center u-jc-center`}
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
