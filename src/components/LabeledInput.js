import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import cross from '../assets/svg/cross.svg';

const LabeledInput = ({ input, inverted, label, meta, name, placeholder, type, withClear }) => (
    <div className="labeled-input">
        <div className="labeled-input__header u-mb">
            <label htmlFor={`input-${name}`} className="u-block">{label}</label>
            {meta.error &&
                <span className="o-type-medium u-color-red u-text-right">
                    {meta.error}
                </span>
            }
        </div>
        
        <div className="u-relative">
            <input
                {...input}
                className={`o-input o-type-large u-block u-bgcolor-${inverted ? 'white' : 'pale-grey'} u-bradius-5 u-color-grey u-p`}
                type={type}
                id={`input-${name}`}
                placeholder={placeholder}
            />

            {withClear &&
                <button
                    type="button"
                    className="labeled-input__clear u-absolute u-bgcolor-red u-color-white"
                >
                    <Svg sprite={cross} />
                </button>
            }
        </div>
    </div>
);

LabeledInput.propTypes = {
    input: PropTypes.object,
    inverted: PropTypes.bool,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    withClear: PropTypes.bool
};

export default LabeledInput;
