import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { toggleCompleted } from '../../store/ListItem/actions';

// Components
import ListItems from '../../components/ListItem/ListItems';

// Selectors
import { getListItemsByCompleted } from '../../store/ListItem/selectors';

class ListItemsContainer extends Component {
    render() {
        const { listItemsByCompleted, match, toggleCompleted } = this.props;

        return (
            <ListItems
                handleToggleCompleted={toggleCompleted}
                listItemsByCompleted={listItemsByCompleted}
                match={match}
            />
        );
    }
}

ListItemsContainer.propTypes = {
    listItemsByCompleted: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    toggleCompleted: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    listItemsByCompleted: getListItemsByCompleted(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleCompleted: listItem => dispatch(toggleCompleted(ownProps.match.params.id, listItem.id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItemsContainer));
