import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { deleteList } from '../../store/List/actions';

// Components
import DeleteListHeaderLink from '../../components/Header/DeleteListHeaderLink';

class DeleteListHeaderLinkContainer extends Component {
    handleDeleteList = () => this.props
        .deleteList()
        .then(() => this.props.history.push('/lists'));

    render() {
        return <DeleteListHeaderLink handleDeleteList={this.handleDeleteList} />;
    }
}

DeleteListHeaderLinkContainer.propTypes = {
    deleteList: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteList: () => dispatch(deleteList(ownProps.match.params.id))
});

export default withRouter(connect(null, mapDispatchToProps)(DeleteListHeaderLinkContainer));
