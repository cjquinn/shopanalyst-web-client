import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from '../shared/Button';
import Input from '../shared/Input';
import Loading from '../shared/Loading';

const CreateListForm = ({ handleSubmit, submitting }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="name"
            placeholder="Enter a name..."
            type="text"
        />

        <Button>
            {submitting ? <Loading /> : 'Create list'}
        </Button>
    </form>
);

CreateListForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default CreateListForm;
