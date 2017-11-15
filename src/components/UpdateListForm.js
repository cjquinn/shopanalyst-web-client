import PropTypes from 'prop-types';
import React from 'react';

// Components
import FormWrapper from './FormWrapper';

const UpdateListForm = ({ handleSubmit, setInputRef }) => (
    <div className="header header--form u-fixed u-width-full u-z-2">
        <form className="u-space-2" onSubmit={handleSubmit}>
            <Field
                className="o-input o-type-medium u-block u-bgcolor-pale-grey u-color-grey u-p u-relative u-text-center u-z-2"
                name="name"
                component="input"
                type="text"
                ref={setInputRef} 
            />

            <FormWrapper>
                <button className="o-button" type="submit">
                    Save changes
                </button>
            </FormWrapper>
        </form>
    </div>
);

UpdateListForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setInputRef: PropTypes.func.isRequired
};

export default UpdateListForm;
