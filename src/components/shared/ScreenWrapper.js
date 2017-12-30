import PropTypes from 'prop-types';
import React from 'react';

const ScreenWrapper = ({ children, modifier }) => (
    <div className={`c-screen-wrapper ${modifier && `c-screen-wrapper--${modifier}`} u-absolute u-1/1`}>
        <div className="o-container u-pv-x2 u-space-x2">
            {children}
        </div>
    </div>
);

ScreenWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    modifier: PropTypes.string
};

export default ScreenWrapper;
