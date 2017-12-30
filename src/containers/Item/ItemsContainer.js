import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { addListItem } from '../../store/ListItem/actions';

// Components
import Items from '../../components/Item/Items';

// Selectors
import { getItems, getLastAddedItem } from '../../store/Item/selectors';

class ItemsContainer extends Component {
    handleAddItem = item => !item.is_existing && this.props.addListItem(item);

    render() {
        const { items, lastAddedItem } = this.props;

        return (
            <Items
                handleAddItem={this.handleAddItem}
                items={items}
                lastAddedItem={lastAddedItem}
            />
        );
    }
}

ItemsContainer.propTypes = {
    addListItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    lastAddedItem: PropTypes.object
};

const mapStateToProps = (state, ownPros) => ({
    items: getItems(state, ownPros),
    lastAddedItem: getLastAddedItem(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addListItem: item => dispatch(addListItem(ownProps.match.params.id, item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
