import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { createList } from '../store/List/actions';

// Components
import CreateListForm from '../components/CreateListForm';

class CreateListFormContainer extends Component {
    handleSubmit = data => this.props
        .createList(data)
        .then(response => this.props.history.push(`/lists/${response.payload.result}`));

    render() {
        return <CreateListForm onSubmit={this.handleSubmit} />;
    }
}

CreateListFormContainer.propTypes = {
    createList: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
    createList: data => dispatch(createList(data))
});

export default connect(null, mapDispatchToProps)(CreateListFormContainer);
