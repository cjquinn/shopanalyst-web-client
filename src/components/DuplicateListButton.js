import PropTypes from 'prop-types';
import React from 'react';

// Components
import Button from './Button';

const DuplicateListButton = ({ handleDuplicateList }) => (
    <Button onClick={handleDuplicateList}>
        Duplicate list
    </Button>
);

DuplicateListButton.propTypes = {
    handleDuplicateList: PropTypes.func.isRequired
};

export default DuplicateListButton;
