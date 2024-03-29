import PropTypes from 'prop-types';
import React from 'react';

const HeaderWrapper = ({ children }) => (
    <div className="c-header u-1/1 u-baseline-x3 u-bgcolor-foreground u-fixed u-flex u-ai-center u-z u-bb">
        <div className="o-container u-relative u-1/1">
            {children}
        </div>
    </div>
);

HeaderWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default HeaderWrapper;
