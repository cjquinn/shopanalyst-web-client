import PropTypes from 'prop-types';
import React from 'react';

const AddItemsInput = ({ handleChangeSearch, handleFocusAddItems, search }) => (
    <div className="c-add-items-input u-1/1 u-bgcolor-foreground u-fixed u-pv">
        <div className="o-container">
            <input
                className="c-input u-1/1 u-baseline-x3 u-b u-block u-bradius u-ph"
                type="text"
                placeholder="Add items..."
                value={search}
                onChange={handleChangeSearch}
                onFocus={handleFocusAddItems}
            />
        </div>
    </div>
);

AddItemsInput.propTypes = {
    handleChangeSearch: PropTypes.func.isRequired,
    handleFocusAddItems: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired
};

export default AddItemsInput;
