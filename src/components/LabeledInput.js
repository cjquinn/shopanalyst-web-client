import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import cross from '../assets/svg/cross.svg';

const LabeledInput = ({ input, id, inverted, label, meta, placeholder, type, withClear }) => (
    <div className="labeled-input">
        <div className="labeled-input__header u-mb">
            <label htmlFor={id} className="u-block">{label}</label>
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
                id={id}
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
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    withClear: PropTypes.bool
};

export default LabeledInput;
