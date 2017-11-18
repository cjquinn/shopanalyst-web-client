import PropTypes from 'prop-types';
import React from 'react';

const SignOutLink = ({ handleClick }) => (
    <a
        className="o-link o-type-medium u-float-right"
        onClick={handleClick}
    >
        Sign out
    </a>
);

SignOutLink.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default SignOutLink;
