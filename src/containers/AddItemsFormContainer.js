import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchItems } from '../store/Item/actions';

// Components
import AddItemsForm from '../components/AddItemsForm';

// Selectors
import { getOptions } from '../store/Item/selectors';

class AddItemsFormContainer extends Component {
    state = {search: ''};

    handleClearInput = () => {
        this.setSearch('');

        this.searchInput.focus();
    };

    handleSearch = event => this.setSearch(event.target.value);

    setSearch = search => this.setState(
        {search},
        () => this.props.fetchItems(search)
    );

    setSearchInput = searchInput => this.searchInput = searchInput;

    render() {
        const { options } = this.props;
        const { search } = this.state;

        return (
            <AddItemsForm
                handleClearInput={this.handleClearInput}
                handleSearch={this.handleSearch}
                options={options}
                search={search}
                setSearchInput={this.setSearchInput}
            />
        );
    }
}

AddItemsFormContainer.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    options: getOptions(state)
});

const mapDispatchToProps = dispatch => ({
    fetchItems: debounce(
        search => dispatch(fetchItems(search)),
        400
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemsFormContainer);
