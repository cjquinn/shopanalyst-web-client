import { createSelector } from 'reselect';

export const getIsFetching = createSelector(
    state => state.item.isFetching,
    isFetching => isFetching
);

export const getItems = createSelector(
    state => state.item.ids,
    state => state.entities.items,
    (ids, items) => ids.map(id => items[id])
);
