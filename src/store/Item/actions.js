import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';

// Schema
import { item as itemSchema } from '../schema';

/**
 * Add Items
 */
export const deselectItem = createAction('DESELECT_ITEM');
export const resetAddItemsForm = createAction('RESET_ADD_ITEMS_FORM');
export const selectItem = createAction('SELECT_ITEM');

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

    if (search.length < 2) {
        return dispatch(fetchItemsSuccess({result: []}));
    }

    return api.fetchItems(search)
        .then(api.checkStatus)
        .then(response => normalize(response.data.items, [itemSchema]))
        .then(normalizedData => dispatch(fetchItemsSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchItemsFailure));
};

