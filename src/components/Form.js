import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Component
import Overlay from './Overlay';

const Form = ({ children }) => (
    <div>
        <div className="u-bgcolor-white u-relative u-z-2">
            <Link
                className="o-link o-link--cancel o-type-medium u-absolute"
                to={cancelTo}
            >
                Cancel
            </Link>

            <div className="o-container u-pv-2 u-space-2">
                {children}
            </div>
        </div>

        <Overlay />
    </div>
);

Form.propTypes = {
    cancelTo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Form;
