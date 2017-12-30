import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { duplicateList } from '../../store/List/actions';

// Components
import DuplicateListButton from '../../components/List/DuplicateListButton';

// Selectors
import { getIsFetching } from '../../store/List/selectors';

class DuplicateListButtonContainer extends Component {
    handleDuplicateList = () => this.props
        .duplicateList()
        .then(response => this.props.history.push(`/lists/${response.payload.result}`));

    render() {
        return (
            <DuplicateListButton
                handleDuplicateList={this.handleDuplicateList}
                isFetching={this.props.isFetching}
            />
        );
    }
}

DuplicateListButtonContainer.propTypes = {
    duplicateList: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    isFetching: getIsFetching(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    duplicateList: () => dispatch(duplicateList(ownProps.match.params.id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DuplicateListButtonContainer));
