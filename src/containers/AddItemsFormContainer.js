import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { deselectItem, fetchItems, selectItem } from '../store/Item/actions';

// Components
import AddItemsForm from '../components/AddItemsForm';

// Selectors
import { getOptions, getSelected } from '../store/Item/selectors';

class AddItemsFormContainer extends Component {
    state = {search: ''};

    handleClearInput = () => {
        this.setSearch('');

        this.searchInput.focus();
    };

    handleSearch = event => this.setSearch(event.target.value);

    handleToggleSelected = listItem => this.props[listItem.is_complete ? 'deselectItem' : 'selectItem'](listItem.item);

    setSearch = search => this.setState(
        {search},
        () => this.props.fetchItems(search)
    );

    setSearchInput = searchInput => this.searchInput = searchInput;

    render() {
        const { options, selected } = this.props;
        const { search } = this.state;

        return (
            <AddItemsForm
                handleClearInput={this.handleClearInput}
                handleSearch={this.handleSearch}
                handleToggleSelected={this.handleToggleSelected}
                options={options}
                search={search}
                selected={selected}
                setSearchInput={this.setSearchInput}
            />
        );
    }
}

AddItemsFormContainer.propTypes = {
    deselectItem: PropTypes.func.isRequired,
    fetchItems: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    selectItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    options: getOptions(state),
    selected: getSelected(state)
});

const mapDispatchToProps = dispatch => ({
    deselectItem: item => dispatch(deselectItem(item)),
    fetchItems: debounce(
        search => dispatch(fetchItems(search)),
        400
    ),
    selectItem: item => dispatch(selectItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemsFormContainer);
