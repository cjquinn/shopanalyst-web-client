import PropTypes from 'prop-types';
import React from 'react';

const SignOutLink = ({ handleClick }) => (
    <div className="u-text-right">
        <a
            className="c-link o-type-medium"
            onClick={handleClick}
        >
            Sign out
        </a>
    </div>
);

SignOutLink.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default SignOutLink;
