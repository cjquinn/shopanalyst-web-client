import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ children }) => (
    <div className="o-container u-bgcolor-white u-pv-2 u-z2">
        {children}
    </div>
);

Form.propTypes = {
    children: PropTypes.node.isRequired
};

export default Form;
