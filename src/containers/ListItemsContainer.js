import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { decreaseQuantity, deleteListItem, increaseQuantity, toggleCompleted, updateQuantity } from '../store/ListItem/actions';

// Components
import ListItems from '../components/ListItems';

// Selectors
import { getListItems } from '../store/List/selectors';

class ListItemsContainer extends Component {
    handleUpdateQuantity = (listItem, quantity) => {
        if (quantity < 1) {
            return;
        }

        this.props.updateQuantity(listItem, quantity);
    };

    render() {
        const { decreaseQuantity, deleteListItem, increaseQuantity, listItems, match, toggleCompleted } = this.props;

        return (
            <ListItems
                handleDecreaseQuantity={decreaseQuantity}
                handleDeleteListItem={deleteListItem}
                handleIncreaseQuantity={increaseQuantity}
                handleToggleCompleted={toggleCompleted}
                handleUpdateQuantity={this.handleUpdateQuantity}
                listItems={listItems}
                match={match}
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
    toggleCompleted: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    listItems: getListItems(ownProps.match.params.id)(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    decreaseQuantity: listItem => dispatch(decreaseQuantity(ownProps.match.params.id, listItem.id)),
    deleteListItem: listItem => dispatch(deleteListItem(ownProps.match.params.id, listItem.id)),
    increaseQuantity: listItem => dispatch(increaseQuantity(ownProps.match.params.id, listItem.id)),
    toggleCompleted: listItem => dispatch(toggleCompleted(ownProps.match.params.id, listItem.id)),
    updateQuantity: (listItem, quantity) => dispatch(updateQuantity(ownProps.match.params.id, listItem.id, quantity)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItemsContainer));
