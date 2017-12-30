import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ListItem from './ListItem';
import Template from '../shared/Template';

// Containers
import DuplicateListButtonContainer from '../../containers/List/DuplicateListButtonContainer';

const ListItems = ({ listItemsByCompleted, match, ...props }) => {
    if (listItemsByCompleted.complete.length === 0 &&
        listItemsByCompleted.incomplete.length === 0
    ) {
        return (
            <p className="o-type-medium u-color-hint u-lh-x3 u-text-center">
                Once you&#039;ve <Link className="c-link" to={`${match.url}/add-items`}>added items</Link> they will show here
            </p>
        );
    }

    return (
        <Template>
            <ul className="o-list o-list--block">
                {listItemsByCompleted.incomplete.map(listItem => (
                    <li className="o-list__item" key={listItem.id}>
                        <ListItem
                            listItem={listItem}
                            {...props}
                        />
                    </li>
                ))}

                {listItemsByCompleted.complete.map(listItem => (
                    <li className="o-list__item" key={listItem.id}>
                        <ListItem
                            listItem={listItem}
                            {...props}
                        />
                    </li>
                ))}
            </ul>

            <DuplicateListButtonContainer />
        </Template>
    );
};

ListItems.propTypes = {
    listItemsByCompleted: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default ListItems;
