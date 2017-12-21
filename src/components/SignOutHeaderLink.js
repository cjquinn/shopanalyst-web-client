import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from './Svg';

// Sprites
import signout from '../assets/svg/signout.svg';

const SignOutListHeaderLink = ({ handleSignOut }) => (
    <button
        type="button"
        className="c-header-link c-header-link--right o-circle u-hover-success u-absolute u-flex u-ai-center u-jc-center u-bradius-100"
        onClick={handleSignOut}
    >
        <Svg sprite={signout} />
    </button>
);

SignOutListHeaderLink.propTypes = {
    handleSignOut: PropTypes.func.isRequired
};

export default SignOutListHeaderLink;
