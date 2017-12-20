import { sortBy } from 'lodash';
import { createSelector } from 'reselect';

// Selectors
import { getListItems } from '../ListItem/selectors';

export const getIsFetching = state => state.item.isFetching;

export const getItemOptions = createSelector(
    state => state.item.search,
    state => state.item.ids,
    state => state.entities.items,
    getListItems,
    (search, ids, items, listItems) => {
        // No search term
        if (search.length === 0) {
            return [];
        }

        // Create new item
        const newOption = {
            name: search,
            is_existing: false
        };

        // Just return search term if no items
        if (ids.length === 0) {
            return [newOption];
        }

        // Check is item is existing on list if there are list items
        const options = ids.map(
            id => ({
                ...items[id],
                is_existing: listItems
                    ? listItems.some(listItem => listItem.item.id === id)
                    : false
            })
        );

        // Just returns items if search term is in options
        if (options.some(option => option.name === search)) {
            return options;
        }

        // EVERYTHING AND SORT IT BABY
        return sortBy(
            [
                newOption,
                ...options
            ],
            item => item.name.toLowerCase()
        );
    }
);
