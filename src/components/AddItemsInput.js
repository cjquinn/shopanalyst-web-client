import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from './Svg';

// Sprites
import cross from '../assets/svg/cross.svg';

const AddItemsInput = ({ handleChangeSearch, handleClearInput, handleFocusAddItems, isFetching, search, setInputRef }) => (
    <div className="c-add-items-input u-1/1 u-bgcolor-foreground u-fixed u-pv">
        <div className="o-container u-relative">
            <input
                className="c-input u-1/1 u-baseline-x3 u-b u-block u-bradius u-ph"
                type="text"
                placeholder="Add items..."
                value={search}
                onChange={handleChangeSearch}
                onFocus={handleFocusAddItems}
                ref={setInputRef}
            />

            {isFetching &&
                <button
                    className="c-input-button c-input-button--loading u-absolute u-flex u-ai-center u-jc-around u-bradius-100"
                    type="button"
                >
                    <div className="c-loading u-flex u-ai-center u-jc-between">
                        <div className="c-loading__ball u-bgcolor-success u-bradius-100" />
                        <div className="c-loading__ball u-bgcolor-success u-bradius-100" />
                        <div className="c-loading__ball u-bgcolor-success u-bradius-100" />
                    </div>
                </button>
            }

            {!isFetching && search.length > 0 &&
                <button
                    className="c-input-button c-input-button--clear u-absolute u-flex u-ai-center u-jc-center u-bradius-100"
                    type="button"
                    onClick={handleClearInput}
                >
                    <Svg sprite={cross} />
                </button>
            }
        </div>
    </div>
);

AddItemsInput.propTypes = {
    handleChangeSearch: PropTypes.func.isRequired,
    handleClearInput: PropTypes.func.isRequired,
    handleFocusAddItems: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    setInputRef: PropTypes.func.isRequired
};

export default AddItemsInput;
