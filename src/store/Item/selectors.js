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


const listItem = (item, is_complete) => ({
    is_complete,
    item
});

export const getOptions = createSelector(
    state => state.item.search,
    getItems,
    (search, items) => {
        if (search.length === 0) {
            return [];
        }

        if (items.length === 0) {
            return [listItem({name: search}, false)];
        }

        if (items[0].name === search) {
            return items.map(item => listItem(item, false));
        }

        return [
            listItem({name: search}, false),
            ...items.map(item => listItem(item, false))
        ];
    }
);

export const getSelected = createSelector(
    state => state.item.selected,
    state => state.entities.items,
    (selected, items) => selected.map(item => listItem(item.name ? item : items[item], true))
);
