import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';

// Schema
import { item as itemSchema } from '../schema';

/**
 * Fetch Lists
 */
export const fetchItemsRequest = createAction('FETCH_ITEMS_REQUEST');
export const fetchItemsSuccess = createAction('FETCH_ITEMS_SUCCESS');
export const fetchItemsFailure = createAction('FETCH_ITEMS_FAILURE');

export const setSearch = createAction('SET_SEARCH');

export const fetchItems = search => (dispatch, getState, api) => {
    dispatch(setSearch(search));
    dispatch(fetchItemsRequest());

    return api.fetchItems(search)
        .then(api.checkStatus)
        .then(response => normalize(response.data.items, [itemSchema]))
        .then(normalizedData => dispatch(fetchItemsSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchItemsFailure));
};
