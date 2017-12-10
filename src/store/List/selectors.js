import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { list as listSchema, listItem as listItemSchema } from '../schema';

// Utils
import { withComputed } from './utils';

export const getIsFetching = state => state.list.isFetching;

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

export const getListItems = createSelector(
    (state, props) => state.entities.lists[props.match.params.id],
    state => state.entities.items,
    state => state.entities.list_items,
    (list, items, list_items) => list
        ? denormalize(list.list_items || [], [listItemSchema], {items, list_items})
        : []
);

export const getListItemsByCompleted = createSelector(
    getListItems,
    listItems =>
        listItems
            .sort((a, b) => {
                if (a.modified > b.modified) {
                    return -1;
                }

                if (a.modified < b.modified) {
                    return 1;
                }

                return 0;
            })
            .reduce((result, listItem) => ({
                ...result,
                [listItem.completed ? 'complete' : 'incomplete']: [
                    ...result[listItem.completed ? 'complete' : 'incomplete'],
                    listItem       
                ]
            }), {complete: [], incomplete: []})
);

export const getListName = id => createSelector(
    state => state.entities.lists[id],
    list => list.name
);

export const getLists = createSelector(
    state => state.list.ids,
    state => state.entities,
    (ids, entities) => denormalize(ids, [listSchema], entities)
        .map(list => withComputed(list))
);

export const getPage = state => state.list.page;

export const getTotal = state => state.list.total;
