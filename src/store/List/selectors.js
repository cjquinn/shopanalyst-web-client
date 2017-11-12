import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { list as listSchema, listItem as listItemSchema } from '../schema';

// Utils
import { withComputed } from './utils';

export const getIsFetching = createSelector(
    state => state.list.isFetching,
    isFetching => isFetching
);

export const getList = id => createSelector(
    state => state.entities,
    entities => {
        const list = denormalize(id, listSchema, entities);

        if (!list) {
            return null;
        }

        return withComputed(list);
    }
);

export const getListItems = id => createSelector(
    state => state.entities.lists[id].list_items,
    state => state.entities.items,
    state => state.entities.list_items,
    (listItemIds, items, list_items) => denormalize(listItemIds || [], [listItemSchema],{items, list_items})
);

export const getLists = createSelector(
    state => state.list.ids,
    state => state.entities,
    (ids, entities) => denormalize(ids, [listSchema], entities)
        .map(list => withComputed(list))
);

export const getPage = createSelector(
    state => state.list.page,
    page => page
);

export const getTotal = createSelector(
    state => state.list.total,
    total => total
);
