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

export const getSelected = createSelector(
    state => state.item.selected,
    state => state.entities.items,
    (selected, items) => selected.map(selected => {
        const item = selected.name ? selected : items[selected];

        return {
            ...item,
            is_selected: true
        };
    })
);

const createOption = (item, search, listItems) => ({
    ...item,
    is_selected: false,
    is_existing: listItems
        ? listItems.some(listItem => listItem.item.id === item.id)
        : false
});

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
        let newOption;
        if (!selected.some(item => item.name === search)) {
            newOption = createOption({name: search}, search);
        }

        // Just return search term or empty if already selected
        if (items.length === 0) {
            if (newOption) {
                return [newOption];
            }

            return [];
        }

        // Just returns item if search term is in items
        if (items.some(item => item.name === search) ||
            !newOption
        ) {
            return items.map(item => createOption(item, search, listItems));
        }

        // EVERYTHING AND SORT IT BABY
        return sortBy(
            [
                newOption,
                ...items.map(item => createOption(item, search, listItems))
            ],
            item => item.name.toLowerCase()
        );
    }
);
