import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import shop from '../assets/svg/shop.svg';

const Splash = ({ children }) => (
    <div className="splash u-absolute u-width-full">
        <div className="u-space u-text-center">
            <Svg sprite={shop} />
            <p>{children}</p>
        </div>
    </div>
);

Splash.propTypes = {
    children: PropTypes.node.isRequired
};

export default Splash;
