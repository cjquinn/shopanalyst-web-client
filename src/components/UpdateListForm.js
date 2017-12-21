import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Input from './Input';
import Button from './Button';

const UpdateListForm = ({ handleSubmit }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="name"
            placeholder="Enter a name..."
            type="text"
        />

        <Button>Save changes</Button>
    </form>
);

UpdateListForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default UpdateListForm;
