import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

// Actions
import { resetPassword, validateToken } from '../store/User/actions';

// Api
import { handle404 } from '../store/api';

// Components
import ResetPasswordForm from '../components/ResetPasswordForm';

const ResetPasswordReduxForm = reduxForm({form: 'resetPassword'})(ResetPasswordForm);

class ResetPasswordFormContainer extends Component {
    handleSubmit = data => this.props
        .resetPassword(this.token, data)
        .then(() => this.props.history.push('/sign-in'))
        .catch(handle404(this.props.history));

    componentDidMount() {
        const { history, validateToken } = this.props;

        const queryParams = window.location.search
            .slice(1)
            .split('&')
            .reduce((params, param) => {
                const [ key, value ] = param.split('=');
                return {[key]: value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''};
            }, {});

        if (!queryParams.token) {
            return handle404(history)({status: 404});
        }

        this.token = queryParams.token;

        validateToken(this.token).catch(() => history.replace('/not-found'));
    }

    render() {
        return <ResetPasswordReduxForm onSubmit={this.handleSubmit} />;
    }
}

ResetPasswordFormContainer.propTypes = {
    history: PropTypes.object.isRequired,
    resetPassword: PropTypes.func.isRequired,
    validateToken: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    resetPassword: (token, data) => dispatch(resetPassword(token, data)),
    validateToken: token => dispatch(validateToken(token))
});

export default withRouter(connect(null, mapDispatchToProps)(ResetPasswordFormContainer));
