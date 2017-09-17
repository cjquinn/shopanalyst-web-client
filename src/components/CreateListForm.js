import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';

// Components
import FormWrapper from './FormWrapper';
import LabeledInput from './LabeledInput';

const CreateListForm = ({ handleSubmit, match }) => (
    <FormWrapper cancelTo={match.url.replace('/create', '')}>
        <form className="u-space-2" onSubmit={handleSubmit}>
            <Field
                component={LabeledInput}
                id="name-input"
                label="Name"
                name="name"
                placeholder="Enter a name..."
                type="text"
            />

            <button className="o-button" type="submit">Create list</button>
        </form>
    </FormWrapper>
);

CreateListForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

export default withRouter(reduxForm({ form: 'createList' })(CreateListForm));
