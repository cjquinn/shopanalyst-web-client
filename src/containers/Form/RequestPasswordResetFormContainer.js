import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

// Actions
import { requestPasswordReset } from '../../store/User/actions';

// Components
import RequestPasswordResetForm from '../../components/Form/RequestPasswordResetForm';

const RequestPasswordResetReduxForm = reduxForm({form: 'requestPasswordReset'})(RequestPasswordResetForm);

class RequestPasswordResetFormContainer extends Component {
    handleSubmit = data => this.props
        .requestPasswordReset(data)
        .then(() => this.props.history.push('/sign-in'));

    render() {
        return <RequestPasswordResetReduxForm onSubmit={this.handleSubmit} />;
    }
}

RequestPasswordResetFormContainer.propTypes = {
    history: PropTypes.object.isRequired,
    requestPasswordReset: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    requestPasswordReset: data => dispatch(requestPasswordReset(data))
});

export default withRouter(connect(null, mapDispatchToProps)(RequestPasswordResetFormContainer));
