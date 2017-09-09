import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import cross from '../assets/svg/cross.svg';

const LabeledInput = ({ clear, inverted, label, name, placeholder, type }) => (
    <div className="labeled-input">
        <label htmlFor={`input-${name}`} className="u-block u-mb">{label}</label>
        
        <div className="u-relative">
            <input
                className={`o-input o-type-large u-block u-bgcolor-${inverted ? 'white' : 'pale-grey'} u-bradius-5 u-color-grey u-p`}
                type={type}
                id={`input-${name}`}
                placeholder={placeholder}
            />

            {clear &&
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
    clear: PropTypes.bool,
    inverted: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string
};

export default LabeledInput;
