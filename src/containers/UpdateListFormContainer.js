import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { updateList } from '../store/List/actions';

// Components
import UpdateListForm from '../components/UpdateListForm';

class UpdateListFormContainer extends Component {
    handleSubmit = data => this.props
        .updateList(data)
        .then(response => this.props.history.push(`/lists/${response.payload.result}`));

    setInputRef = input => this.inputRef = input;

    componentDidMount() {
        this.inputRef.focus();
    }

    render() {
        const { match } = this.props;

        return React.createElement(
            reduxForm({form: 'updateList'})(UpdateListForm),
            {
                onSubmit: this.handleSubmit,
                setInputRef: this.setInputRef
            }
        );
    }
}

UpdateListFormContainer.propTypes = {
    updateList: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateList: data => dispatch(updateList(ownProps.match.params.id, data))
});

export default connect(null, mapDispatchToProps)(UpdateListFormContainer);
