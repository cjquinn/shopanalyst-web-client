import PropTypes from 'prop-types';
import React from 'react';

// Components
import Form from './Form';
import LabeledInput from './LabeledInput';

const AddItemsForm = ({ match }) => (
    <Form cancelTo={match.url.replace('/add-items', '')}>
        <LabeledInput
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
    </Form>
);

AddItemsForm.propTypes = {
    match: PropTypes.object.isRequired
};

export default AddItemsForm;
