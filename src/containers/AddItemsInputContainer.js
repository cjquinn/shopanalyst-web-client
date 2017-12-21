import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { fetchItems } from '../store/Item/actions';

// Components
import AddItemsInput from '../components/AddItemsInput';

// Selectors
import { getIsFetching } from '../store/Item/selectors';

class AddItemsInputContainer extends Component {
    state = {search: ''};

    handleChangeSearch = event => this.setSearch(event.target.value);

    handleFocusAddItems = () => this.props.history.push(
        `${this.props.match.url}/add-items`
    );

    handleClearInput = () => {
        this.setSearch('');
        this.inputRef.focus();
    };

    setSearch = search => this.setState(
        {search},
        () => this.props.fetchItems(this.state.search)
    );

    setInputRef = ref => this.inputRef = ref;

    render() {
        return (
            <AddItemsInput
                handleChangeSearch={this.handleChangeSearch}
                handleClearInput={this.handleClearInput}
                handleFocusAddItems={this.handleFocusAddItems}
                isFetching={this.props.isFetching}
                search={this.state.search}
                setInputRef={this.setInputRef}
            />
        );
    }
}

AddItemsInputContainer.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
});

const mapDispatchToProps = dispatch => ({
    fetchItems: debounce(
        search => dispatch(fetchItems(search)),
        200
    )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddItemsInputContainer));
