import PropTypes from 'prop-types';
import React from 'react';

const ScreenWrapper = ({ children }) => (
    <div className="o-container u-p-2 u-space-2">
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
