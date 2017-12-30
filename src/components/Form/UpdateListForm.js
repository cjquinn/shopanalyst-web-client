import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from '../shared/Button';
import Input from '../shared/Input';
import Loading from '../shared/Loading';

const UpdateListForm = ({ handleSubmit, submitting, submitSucceeded }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        {!submitting && submitSucceeded &&
            <p className="o-type-medium u-color-success u-text-center">
                List updated
            </p>
        }

        <Field
            component={Input}
            name="name"
            placeholder="Enter a name..."
            type="text"
        />

        <Button>
            {submitting ? <Loading /> : 'Save changes'}
        </Button>
    </form>
);

UpdateListForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    submitSucceeded: PropTypes.bool.isRequired
};

export default UpdateListForm;
