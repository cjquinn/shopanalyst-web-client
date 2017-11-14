import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { toggleCompleted } from '../store/ListItem/actions';

// Components
import ListItems from '../components/ListItems';

// Selectors
import { getListItems } from '../store/List/selectors';

class ListItemsContainer extends Component {
    render() {
        const { listItems, match, toggleCompleted } = this.props;

        return (
            <ListItems
                handleToggleCompleted={toggleCompleted}
                listItems={listItems}
                match={match}
            />
        );
    }
}

ListItemsContainer.propTypes = {
    listItems: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    toggleCompleted: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    listItems: getListItems(ownProps.match.params.id)(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleCompleted: listItem => dispatch(toggleCompleted(ownProps.match.params.id, listItem.id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItemsContainer));
