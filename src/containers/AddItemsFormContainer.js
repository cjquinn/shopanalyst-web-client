import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchItems } from '../store/Item/actions';

// Components
import AddItemsForm from '../components/AddItemsForm';

class AddItemsFormContainer extends Component {
    state = {search: ''};

    handleClearInput = () => this.setState({search: ''});

    handleSearch = event => {
        this.setState({search: event.target.value});
    };

    render() {
        return (
            <AddItemsForm
                handleClearInput={this.handleClearInput}
                handleSearch={this.handleSearch}
                search={this.state.search}
            />
        );
    }
}

AddItemsFormContainer.propTypes = {
    fetchItems: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    fetchItems: search => dispatch(fetchItems(search))
});

export default connect(null, mapDispatchToProps)(AddItemsFormContainer);
