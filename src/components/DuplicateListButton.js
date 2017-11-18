import PropTypes from 'prop-types';
import React from 'react';

const DuplicateListButton = ({ handleDuplicateList }) => (
    <button
        className="o-button"
        type="button"
        onClick={handleDuplicateList}
    >
        Duplicate list
    </button>
);

DuplicateListButton.propTypes = {
    handleDuplicateList: PropTypes.func.isRequired
};

export default DuplicateListButton;
