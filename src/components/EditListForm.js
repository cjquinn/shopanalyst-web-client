import React, { Component } from 'react';

// Components
import FormWrapper from './FormWrapper';

class EditListForm extends Component {
    componentDidMount() {
        this.input.focus();
    }

    render() {
        return (
            <div className="header header--form u-fixed u-width-full">
                <input
                    className="o-input o-type-medium u-block u-bgcolor-pale-grey u-color-grey u-p u-relative u-text-center u-z-2"
                    type="text"
                    defaultValue="List Name"
                    ref={input => this.input = input} 
                />

                <FormWrapper>
                    <button className="o-button" type="button">Save changes</button>
                </FormWrapper>
            </div>
        );
    }
}

export default EditListForm;