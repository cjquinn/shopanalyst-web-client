import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

// Components
import FormWrapper from './FormWrapper';
import ListItems from './ListItems';
import Svg from './Svg';

// Sprites
import cross from '../assets/svg/cross.svg';

const AddItemsForm = ({ handleClearInput, handleSearch, match, options, search, setSearchInput }) => (
    <FormWrapper cancelTo={match.url.replace('/add-items', '')}>
        <div className="u-space-2">
            <div className="labeled-input u-space">
                <label htmlFor="search-input" className="u-block">
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

            <div className="u-space">
                <label className="u-block u-mb">Items</label>

                <div className="u-bgcolor-light-grey u-bradius-5 u-ph u-pv-2">
                    <ListItems listItems={options}>
                        <p className="o-type-medium u-color-brown">No items</p>
                    </ListItems>
                </div>
            </div>

            <div className="u-space">
                <label className="u-block u-mb">Selected</label>

                <div className="u-bgcolor-light-grey u-bradius-5 u-ph u-pv-2">
                    <p className="o-type-medium u-color-brown">
                        None selected
                    </p>
                </div>
            </div>

            <button
                className="o-button"
                type="button"
                disabled
            >
                Add items
            </button>
        </div>
    </FormWrapper>
);

AddItemsForm.propTypes = {
    handleClearInput: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired
};

export default withRouter(AddItemsForm);
