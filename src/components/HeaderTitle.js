import PropTypes from 'prop-types';
import React from 'react';

const HeaderTitle = ({ children }) => (
    <h1 className="o-type-medium u-text-center u-weight-normal u-overflow-truncate u-ph-x2">
        {children}
    </h1>
);

HeaderTitle.propTypes = {
    children: PropTypes.node.isRequired
};

export default HeaderTitle;
