import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { updateSettings } from '../store/User/actions';

// Components
import UpdateSettingsForm from '../components/UpdateSettingsForm';

// Selectors
import { getEmail } from '../store/User/selectors';

const UpdateSettingsReduxForm = reduxForm({form: 'updateSettings'})(UpdateSettingsForm);

class UpdateSettingsFormContainer extends Component {
    handleSubmit = data => this.props.updateSettings(data);

    render() {
        return (
            <UpdateSettingsReduxForm
                initialValues={this.props.initialValues}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

UpdateSettingsFormContainer.propTypes = {
    initialValues: PropTypes.object.isRequired,
    updateSettings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    initialValues: {
        email: getEmail(state)
    }
});

const mapDispatchToProps = dispatch => ({
    updateSettings: data => dispatch(updateSettings(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSettingsFormContainer);
