import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { decreaseQuantity, deleteListItem, increaseQuantity, toggleCompleted } from '../store/ListItem/actions';

// Components
import ListItems from '../components/ListItems';

// Selectors
import { getListItems } from '../store/List/selectors';

class ListItemsContainer extends Component {
    render() {
        const { decreaseQuantity, deleteListItem, increaseQuantity, listItems, toggleCompleted } = this.props;

        return (
            <ListItems
                decreaseQuantity={decreaseQuantity}
                deleteListItem={deleteListItem}
                increaseQuantity={increaseQuantity}
                listItems={listItems}
                toggleCompleted={toggleCompleted}
            />
        );
    }
}

ListItemsContainer.propTypes = {
    decreaseQuantity: PropTypes.func.isRequired,
    deleteListItem: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    listItems: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    toggleCompleted: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    listItems: getListItems(ownProps.match.params.id)(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    decreaseQuantity: id => dispatch(decreaseQuantity(ownProps.match.params.id, id)),
    deleteListItem: id => dispatch(deleteListItem(ownProps.match.params.id, id)),
    increaseQuantity: id => dispatch(increaseQuantity(ownProps.match.params.id, id)),
    toggleCompleted: id => dispatch(toggleCompleted(ownProps.match.params.id, id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItemsContainer));
