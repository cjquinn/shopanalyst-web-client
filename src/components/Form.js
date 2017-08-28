import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ children }) => (
    <div className="u-bgcolor-white u-z-2">
        <div className="o-container u-pv-2 u-space-2">
            {children}
        </div>
    </div>
);

Form.propTypes = {
    children: PropTypes.node.isRequired
};

export default Form;
