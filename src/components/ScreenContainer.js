import PropTypes from 'prop-types';
import React from 'react';

const ScreenContainer = ({ children }) => (
    <div className="o-container u-p-2 u-space-2">
        {children}
    </div>
);

ScreenContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default ScreenContainer;
