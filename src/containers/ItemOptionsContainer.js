import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ItemOptions from '../components/ItemOptions';

// Selectors
import { getItemOptions } from '../store/Item/selectors';

class ItemOptionsContainer extends Component {
    render() {
        const { itemOptions } = this.props;

        return <ItemOptions itemOptions={itemOptions} />;
    }
}

ItemOptionsContainer.propTypes = {
    itemOptions: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownPros) => ({
    itemOptions: getItemOptions(state, ownPros)
});

export default connect(mapStateToProps)(ItemOptionsContainer);
