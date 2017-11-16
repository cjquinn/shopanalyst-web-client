import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { updateList } from '../store/List/actions';

// Components
import UpdateListForm from '../components/UpdateListForm';

const UpdateListReduxForm = reduxForm({form: 'updateList'})(UpdateListForm);

class UpdateListFormContainer extends Component {
    handleSubmit = data => this.props
        .updateList(data)
        .then(response => this.props.history.push(`/lists/${response.payload.result}`));

    setInputRef = inputRef => this.inputRef = inputRef;

    componentDidMount() {
        this.inputRef.getRenderedComponent().focus();
    }

    render() {
        console.log(this.props);
        return (
            <UpdateListReduxForm
                onSubmit={this.handleSubmit}
                setInputRef={this.setInputRef}
            />
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
