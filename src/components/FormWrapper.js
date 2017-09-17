import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Component
import Overlay from './Overlay';

const FormWrapper = ({ cancelTo, children }) => (
    <div>
        <div className="u-bgcolor-white u-relative u-z-2">
            {cancelTo &&
                <Link
                    className="o-link o-link--cancel o-type-medium u-absolute"
                    to={cancelTo}
                >
                    Cancel
                </Link>
            }

            <div className="o-container u-pv-2">
                {children}
            </div>
        </div>

        <Overlay />
    </div>
);

FormWrapper.propTypes = {
    cancelTo: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default FormWrapper;
