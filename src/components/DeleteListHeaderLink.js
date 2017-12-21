import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from './Svg';

// Sprites
import cross from '../assets/svg/cross.svg';

const DeleteListHeaderLink = ({ handleDeleteList }) => (
    <button
        type="button"
        className="c-header-link c-header-link--right o-circle u-hover-warning u-absolute u-flex u-ai-center u-jc-center u-bradius-100"
        onClick={handleDeleteList}
    >
        <Svg sprite={cross} />
    </button>
);

DeleteListHeaderLink.propTypes = {
    handleDeleteList: PropTypes.func.isRequired
};

export default DeleteListHeaderLink;
