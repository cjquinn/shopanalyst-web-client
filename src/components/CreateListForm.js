import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Input from './Input';
import Button from './Button';

const CreateListForm = ({ handleSubmit }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="name"
            placeholder="Enter a name..."
            type="text"
        />

        <Button>Create list</Button>
    </form>
);

CreateListForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default CreateListForm;
