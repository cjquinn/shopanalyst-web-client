import PropTypes from 'prop-types';
import React from 'react';

const LabeledInput = ({ input, id, inverted, label, meta, placeholder, type }) => (
    <div className="labeled-input u-space">
        <label htmlFor={id} className="u-block">{label}</label>
        
        <div className="u-relative">
            <input
                {...input}
                className={`o-input o-type-large u-block u-bgcolor-${inverted ? 'white' : 'pale-grey'} u-bradius-5 u-color-grey u-p`}
                type={type}
                id={id}
                placeholder={placeholder}
            />
        </div>

        {meta && meta.error &&
            <p className="o-type-medium u-color-red">
                {meta.error}
            </p>
        }
    </div>
);

LabeledInput.propTypes = {
    input: PropTypes.object.isRequired,
    inverted: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default LabeledInput;
