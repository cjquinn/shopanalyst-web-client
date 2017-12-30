import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { deleteListItem, updateQuantity } from '../../store/ListItem/actions';

// Components
import ListItemActions from '../../components/ListItem/ListItemActions';

class ListItemActionsContainer extends Component {
    state = {quantity: ''};

    handleBlurQuantity = event => {
        const { listItem, updateQuantity } = this.props;
        const quantity = parseInt(event.target.value);

        if (quantity > 0) {
            return updateQuantity(quantity);
        }

        this.setState({quantity: String(listItem.quantity)});
    };

    handleChangeQuantity = event => this.setState({quantity: event.target.value});

    handleDeleteListItem = () => this.props.deleteListItem(this.props.listItem);

    setQuantity = quantity => this.setState(
        {quantity: String(quantity)},
        () => quantity > 0 && this.props.updateQuantity(quantity)
    );

    componentDidMount() {
        this.setState({
            quantity: String(this.props.listItem.quantity)
        });
    }

    render() {
        return (
            <ListItemActions
                handleBlurQuantity={this.handleBlurQuantity}
                handleChangeQuantity={this.handleChangeQuantity}
                handleDeleteListItem={this.handleDeleteListItem}
                quantity={this.state.quantity}
            />
        );
    }
}

ListItemActionsContainer.propTypes = {
    deleteListItem: PropTypes.func.isRequired,
    listItem: PropTypes.object.isRequired,
    updateQuantity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, { listItem, match }) => ({
    deleteListItem: () => dispatch(deleteListItem(match.params.id, listItem.id)),
    updateQuantity: quantity => dispatch(updateQuantity(match.params.id, listItem.id, quantity))
});

export default withRouter(connect(null, mapDispatchToProps)(ListItemActionsContainer));
