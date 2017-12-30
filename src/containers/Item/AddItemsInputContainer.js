import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { setSearch, fetchItems } from '../../store/Item/actions';

// Components
import AddItemsInput from '../../components/Item/AddItemsInput';

// Selectors
import { getIsFetching } from '../../store/Item/selectors';

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
        () => this.props[this.state.search.length === 0 ? 'setSearch' : 'fetchItems'](search)
    );

    setInputRef = ref => this.inputRef = ref;

    componentDidMount() {
        this.props.setSearch(this.state.search);
    }

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
    match: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
});

const mapDispatchToProps = dispatch => ({
    fetchItems: debounce(
        search => dispatch(fetchItems(search)),
        200
    ),
    setSearch: search => dispatch(setSearch(search))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddItemsInputContainer));
