import PropTypes from 'prop-types';
import React from 'react';

// Components
import FormWrapper from './FormWrapper';
import Items from './Items';
import Svg from './Svg';

// Sprites
import cross from '../assets/svg/cross.svg';

const AddItemsForm = ({ handleClearInput, handleSearch, handleSubmit, handleToggleSelected, match, options, search, selected, setSearchInput }) => (
    <FormWrapper cancelTo={match.url.replace('/add-items', '')}>
        <div className="u-space-2">
            <div className="labeled-input u-space">
                <label htmlFor="search-input" className="o-type-small u-block">
                    Search for items
                </label>
                
                <div className="u-relative">
                    <input
                        className='o-input o-type-large u-block u-bgcolor-pale-grey u-bradius-5 u-color-grey u-p'
                        type="text"
                        id="search-input"
                        placeholder="Start by typing..."
                        onChange={handleSearch}
                        ref={setSearchInput}
                        value={search}
                    />

                    {search.length > 0 &&
                        <button
                            type="button"
                            className="labeled-input__clear u-absolute u-bgcolor-red u-color-white"
                            onClick={handleClearInput}
                        >
                            <Svg sprite={cross} />
                        </button>
                    }
                </div>
            </div>

            <Items
                empty="No items"
                handleToggleSelected={handleToggleSelected}
                items={options}
                title="Items"
            />

            <Items
                empty="None selected"
                handleToggleSelected={handleToggleSelected}
                items={selected}
                title="Selected"
            />

            <button
                className="o-button"
                type="button"
                disabled={selected.length === 0}
                onClick={handleSubmit}
            >
                Add items
            </button>
        </div>
    </FormWrapper>
);

AddItemsForm.propTypes = {
    handleClearInput: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleToggleSelected: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    selected: PropTypes.array.isRequired,
    setSearchInput: PropTypes.func.isRequired
};

export default AddItemsForm;
