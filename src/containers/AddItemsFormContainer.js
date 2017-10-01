import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { deselectItem, fetchItems, selectItem } from '../store/Item/actions';
import { addItems } from '../store/List/actions';

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

    handleSubmit = () => this.props
        .addItems()
        .then(() => this.props.history
            .push(this.props.match.url.replace('/add-items', ''))
        );

    handleToggleSelected = listItem => this.props[listItem.is_complete ? 'deselectItem' : 'selectItem'](listItem.item);

    setSearch = search => this.setState(
        {search},
        () => this.props.fetchItems(search.trim())
    );

    setSearchInput = searchInput => this.searchInput = searchInput;

    render() {
        const { options, selected } = this.props;
        const { search } = this.state;

        return (
            <AddItemsForm
                handleClearInput={this.handleClearInput}
                handleSearch={this.handleSearch}
                handleSubmit={this.handleSubmit}
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
    addItems: PropTypes.func.isRequired,
    deselectItem: PropTypes.func.isRequired,
    fetchItems: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    selectItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    options: getOptions(state),
    selected: getSelected(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addItems: () => dispatch(addItems(ownProps.match.params.id)),
    deselectItem: item => dispatch(deselectItem(item)),
    fetchItems: debounce(
        search => dispatch(fetchItems(search)),
        400
    ),
    selectItem: item => dispatch(selectItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemsFormContainer);
