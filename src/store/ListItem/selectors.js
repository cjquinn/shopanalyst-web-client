import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { listItem as listItemSchema } from '../schema';

export const getIsAdding = state => state.listItem.isAdding;

export const getListItems = createSelector(
    (state, props) => state.entities.lists[props.match.params.id],
    state => state.entities.items,
    state => state.entities.list_items,
    (list, items, list_items) => list
        ? denormalize(list.list_items || [], [listItemSchema], {items, list_items})
        : []
);

export const getListItemsByCompleted = (state, props) =>
    getListItems(state, props)
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
        }), {complete: [], incomplete: []});
