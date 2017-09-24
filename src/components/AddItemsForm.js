import PropTypes from 'prop-types';
import React from 'react';

// Components
import FormWrapper from './FormWrapper';
import LabeledInput from './LabeledInput';

const AddItemsForm = ({ match }) => (
    <FormWrapper cancelTo={match.url.replace('/add-items', '')}>
        <div className="u-space-2">
            <LabeledInput
                id="search"
                meta={{}}
                label="Search for items"
                name="items-search"
                placeholder="Start by typing..."
                type="text"
            />

            <div className="u-space">
                <label className="u-block u-mb">Items</label>

                <div className="u-bgcolor-light-grey u-bradius-5 u-ph u-pv-2">
                    <p className="o-type-medium u-color-brown">
                        No items
                    </p>
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
    match: PropTypes.object.isRequired
};

export default AddItemsForm;
