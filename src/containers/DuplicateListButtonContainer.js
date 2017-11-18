import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { duplicateList } from '../store/List/actions';

// Components
import DuplicateListButton from '../components/DuplicateListButton';

class DuplicateListButtonContainer extends Component {
    handleDuplicateList = () => this.props
        .duplicateList()
        .then(response => this.props.history.push(`/lists/${response.payload.result}`));

    render() {
        return <DuplicateListButton handleDuplicateList={this.handleDuplicateList} />;
    }
}

DuplicateListButtonContainer.propTypes = {
    duplicateList: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    duplicateList: () => dispatch(duplicateList(ownProps.match.params.id))
});

export default withRouter(connect(null, mapDispatchToProps)(DuplicateListButtonContainer));
