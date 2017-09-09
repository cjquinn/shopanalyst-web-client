import PropTypes from 'prop-types';
import React from 'react';

// Components
import Form from './Form';
import LabeledInput from './LabeledInput';

const CreateListForm = ({ match }) => (
    <Form cancelTo={match.url.replace('/create', '')}>
        <LabeledInput
            label="Name"
            name="name"
            placeholder="Enter a name..."
            type="text"
        />

        <button className="o-button" type="button">
            Create list
        </button>
    </Form>
);

CreateListForm.propTypes = {
    match: PropTypes.object.isRequired
};

export default CreateListForm;
