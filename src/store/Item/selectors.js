import { createSelector } from 'reselect';

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

export const getOptions = createSelector(
    state => state.item.search,
    getItems,
    (search, items) => {
        if (search.length === 0) {
            return [];
        }

        if (items.length === 0) {
            return [{name: search}];
        }

        if (items[0].name === search) {
            return items;
        }

        return [
            {name: search},
            ...items
        ];
    }
);

export const getSelected = createSelector(
    state => state.item.selected,
    state => state.entities.items,
    (selected, items) => selected.map(item => item.name ? item : items[item])
);
