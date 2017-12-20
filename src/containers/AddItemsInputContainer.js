import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { fetchItems } from '../store/Item/actions';

// Components
import AddItemsInput from '../components/AddItemsInput';

class AddItemsInputContainer extends Component {
    state = {search: ''};

    handleChangeSearch = event => this.setState(
        {search: event.target.value},
        () => this.props.fetchItems(this.state.search)
    );

    handleFocusAddItems = () => this.props.history.push(
        `${this.props.match.url}/add-items`
    );

    render() {
        return (
            <AddItemsInput
                handleChangeSearch={this.handleChangeSearch}
                handleFocusAddItems={this.handleFocusAddItems}
                search={this.state.search}
            />
        );
    }
}

AddItemsInputContainer.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
    fetchItems: debounce(
        search => dispatch(fetchItems(search)),
        200
    )
});

export default withRouter(connect(null, mapDispatchToProps)(AddItemsInputContainer));
