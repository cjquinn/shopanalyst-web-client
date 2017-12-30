import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ input, meta, placeholder, type }) => (
    <div className="u-space">
        <input
            {...input}
            className="c-input u-1/1 u-baseline-x3 u-b u-block u-bradius u-ph"
            type={type}
            placeholder={placeholder}
        />

        {meta && meta.error &&
            <p className="o-type-medium u-color-warning u-ml">
                {meta.error}
            </p>
        }
    </div>
);

Input.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Input;
