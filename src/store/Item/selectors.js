import React from 'react';
import { sortBy } from 'lodash';
import { createSelector } from 'reselect';

// Selectors
import { getListItems } from '../List/selectors';

export const getAddItemsData = createSelector(
    state => state.item.selected,
    selected => ({
        list_items: selected.map(item => item.name
            ? {item}
            : {item_id: item}
        )
    })
);

export const getIsFetching = createSelector(
    state => state.item.isFetching,
    isFetching => isFetching
);

export const getItems = createSelector(
    state => state.item.ids,
    state => state.item.selected,
    state => state.entities.items,
    (ids, selected, items) => ids
        .filter(id => selected.indexOf(id) === -1)
        .map(id => items[id])
);

const createListItem = (item, isComplete, search, listItems) => ({
    item,
    is_complete: isComplete,
    is_existing: listItems
        ? listItems.some(listItem => listItem.item.id === item.id)
        : false
});

export const getSelected = createSelector(
    state => state.item.selected,
    state => state.entities.items,
    (selected, items) => selected.map(item => createListItem(item.name ? item : items[item], true))
);

export const getOptions = listId => createSelector(
    state => state.item.search,
    getSelected,
    getItems,
    getListItems(listId),
    (search, selected, items, listItems) => {
        // No search term
        if (search.length === 0) {
            return [];
        }

        // Create new item if search term isn't already selected
        let newListItem;
        if (!selected.some(listItem => listItem.item.name === search)) {
            newListItem = createListItem({name: search}, false, search);
        }

        // Just return search term or empty if already selected
        if (items.length === 0) {
            if (newListItem) {
                return [newListItem];
            }

            return [];
        }

        // Just returns item if search term is in items
        if (items.some(item => item.name === search) ||
            !newListItem
        ) {
            return items.map(item => createListItem(item, false, search, listItems));
        }

        // EVERYTHING AND SORT IT BABY
        return sortBy(
            [
                newListItem,
                ...items.map(item => createListItem(item, false, search, listItems))
            ],
            listItem => listItem.item.name.toLowerCase()
        );
    }
);
