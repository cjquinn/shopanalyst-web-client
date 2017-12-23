import PropTypes from 'prop-types';
import React from 'react';

// Components
import ScreenWrapper from './ScreenWrapper';
import Svg from '../components/Svg';

// Sprites
import shop from '../assets/svg/shop.svg';

const UnauthorisedScreenWrapper = ({ children }) => (
    <ScreenWrapper>
        <Svg className="u-block" sprite={shop} />

        {children}
    </ScreenWrapper>
);

UnauthorisedScreenWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default UnauthorisedScreenWrapper;
