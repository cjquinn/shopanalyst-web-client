import PropTypes from 'prop-types';
import React from 'react';

// Components
import Loading from './Loading';
import Svg from './Svg';

// Sprites
import cross from '../assets/svg/cross.svg';

const AddItemsInput = ({ handleChangeSearch, handleClearInput, handleFocusAddItems, isFetching, search, setInputRef }) => (
    <div className="c-add-items-input u-1/1 u-bgcolor-foreground u-absolute u-baseline-x4">
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
                    className="c-add-items-input__button o-circle u-hover-success u-absolute u-flex u-ai-center u-jc-around u-bradius-100"
                    type="button"
                >
                    <Loading />
                </button>
            }

            {!isFetching && search.length > 0 &&
                <button
                    className="c-add-items-input__button o-circle u-hover-warning u-absolute u-flex u-ai-center u-jc-center u-bradius-100"
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
