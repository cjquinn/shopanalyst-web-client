import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ItemOptions from '../components/ItemOptions';

// Selectors
import { getIsFetching, getItemOptions } from '../store/Item/selectors';

class ItemOptionsContainer extends Component {
    render() {
        const { isFetching, itemOptions } = this.props;

        return (
            <ItemOptions
                isFetching={isFetching}
                itemOptions={itemOptions}
            />
        );
    }
}

ItemOptionsContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    itemOptions: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownPros) => ({
    isFetching: getIsFetching(state),
    itemOptions: getItemOptions(state, ownPros)
});

export default connect(mapStateToProps)(ItemOptionsContainer);
