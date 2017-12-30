import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { addListItem } from '../../store/ListItem/actions';

// Components
import Items from '../../components/Item/Items';

// Selectors
import { getItems } from '../../store/Item/selectors';

class ItemsContainer extends Component {
    handleAddItem = item => !item.is_existing && this.props.addListItem(item);

    render() {
        return (
            <Items
                handleAddItem={this.handleAddItem}
                items={this.props.items}
            />
        );
    }
}

ItemsContainer.propTypes = {
    addListItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownPros) => ({
    items: getItems(state, ownPros)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addListItem: item => dispatch(addListItem(ownProps.match.params.id, item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
