import PropTypes from 'prop-types';
import React from 'react';

const DuplicateListButton = ({ handleDuplicateList }) => (
    <div className="u-text-center">
        <button
            className="c-link o-type-medium"
            type="button"
            onClick={handleDuplicateList}
        >
            Duplicate list
        </button>
    </div>
);

DuplicateListButton.propTypes = {
    handleDuplicateList: PropTypes.func.isRequired
};

export default DuplicateListButton;
