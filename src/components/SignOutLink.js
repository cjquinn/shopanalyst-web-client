import PropTypes from 'prop-types';
import React from 'react';

const SignOutLink = ({ handleClick }) => (
    <div className="u-text-right">
        <button
            className="c-link o-type-medium"
            type="button"
            onClick={handleClick}
        >
            Sign out
        </button>
    </div>
);

SignOutLink.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default SignOutLink;
