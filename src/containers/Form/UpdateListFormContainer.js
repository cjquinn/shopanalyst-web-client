import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

// Actions
import { updateList } from '../../store/List/actions';

// Components
import UpdateListForm from '../../components/Form/UpdateListForm';

// Selectors
import { getListName } from '../../store/List/selectors';

const UpdateListReduxForm = reduxForm({form: 'updateList'})(UpdateListForm);

class UpdateListFormContainer extends Component {
    handleSubmit = data => this.props.updateList(data);

    render() {
        return (
            <UpdateListReduxForm
                initialValues={{name: this.props.listName}}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

UpdateListFormContainer.propTypes = {
    listName: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    updateList: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    listName: getListName(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateList: data => dispatch(updateList(ownProps.match.params.id, data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateListFormContainer));
