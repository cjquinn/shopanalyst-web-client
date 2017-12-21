import PropTypes from 'prop-types';
import React from 'react';

// Components
import Button from './Button';
import Loading from './Loading';

const DuplicateListButton = ({ handleDuplicateList, isFetching }) => (
    <Button onClick={handleDuplicateList}>
        {isFetching ? <Loading /> : 'Duplicate list'}
    </Button>
);

DuplicateListButton.propTypes = {
    handleDuplicateList: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default DuplicateListButton;
