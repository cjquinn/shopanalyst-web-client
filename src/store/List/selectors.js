import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { list as listSchema } from '../schema';

export const getIsFetching = state => state.list.isFetching;

export const getLists = createSelector(
    state => state.list.ids,
    state => state.entities,
    (ids, entities) => denormalize(ids, [listSchema], entities).map(list => {
        const completeCount = list.list_items
            .filter(listItem => listItem.isComplete).length;

        return {
            ...list,
            completeCount: completeCount,
            itemsProgress: `${completeCount}/${list.list_items.length} items`,
            progress: list.list_items.length > 0
                ? `${(completeCount / list.list_items.length) * 100}%`
                : 0
        };
    })
);

export const getPage = state => state.list.page;

export const getTotal = state => state.list.total;
