import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { decreaseQuantity, deleteListItem, increaseQuantity, toggleCompleted } from '../store/ListItem/actions';

// Components
import ListItems from '../components/ListItems';

class ListItemsContainer extends Component {
    render() {
        return (
            <ListItems />
        );
    }
}

ListItemsContainer.propTypes = {
    decreaseQuantity: PropTypes.func.isRequired,
    deleteListItem: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    listItems: PropTypes.array.isRequired,
    toggleCompleted: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    decreaseQuantity: () => dispatch(decreaseQuantity()),
    deleteListItem: () => dispatch(deleteListItem()),
    increaseQuantity: () => dispatch(increaseQuantity()),
    toggleCompleted: () => dispatch(toggleCompleted())
});

export default connect(null, mapDispatchToProps)(ListItemsContainer);
