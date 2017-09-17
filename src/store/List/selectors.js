import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { list as listSchema } from '../schema';

export const getIsFetching = state => state.list.isFetching;

export const getLists = createSelector(
    state => state.list.ids,
    state => state.entities,
    (ids, entities) => denormalize(ids, [listSchema], entities).map(list => {
        let completeCount = 0;
        let itemsProgress = '0/0 items';
        let progress = 0;

        if (list.list_items &&
            list.list_items.length > 0
        ) {
            completeCount = list.list_items
                .filter(listItem => listItem.isComplete)
                .length;
            itemsProgress = `${completeCount}/${list.list_items.length} items`;
            progress = `${(completeCount / list.list_items.length) * 100}%`;
        }

        return {
            ...list,
            completeCount,
            itemsProgress,
            progress
        };
    })
);

export const getPage = state => state.list.page;

export const getTotal = state => state.list.total;
