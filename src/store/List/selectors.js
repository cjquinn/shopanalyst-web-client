import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { list as listSchema } from '../schema';

export const getIsFetching = state => state.list.isFetching;

export const getLists = createSelector(
    state => state.list.ids,
    state => state.entities,
    (ids, entities) => denormalize(ids, [listSchema], entities)
);

export const getPage = state => state.list.page;

export const getTotal = state => state.list.total;
