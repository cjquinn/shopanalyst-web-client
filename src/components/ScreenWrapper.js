import PropTypes from 'prop-types';
import React from 'react';

const ScreenWrapper = ({ children, ...props }) => (
    <div
        className="o-container u-pv-2 u-space-2"
        {...props}
    >
        {children}
    </div>
);

ScreenWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default ScreenWrapper;
