import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';

// Schema
import { item as itemSchema } from '../schema';

export const setSearch = createAction('SET_SEARCH');

/**
 * Fetch Lists
 */
export const fetchItemsRequest = createAction('FETCH_ITEMS_REQUEST');
export const fetchItemsSuccess = createAction('FETCH_ITEMS_SUCCESS');
export const fetchItemsFailure = createAction('FETCH_ITEMS_FAILURE');

export const fetchItems = search => (dispatch, getState, api) => {
    dispatch(fetchItemsRequest());

    if (search.length > 1) {
        return api.fetchItems(search)
            .then(api.checkStatus)
            .then(response => normalize(response.data.items, [itemSchema]))
            .then(normalizedData => dispatch(fetchItemsSuccess(normalizedData)))
            .then(() => dispatch(setSearch(search)))
            .catch(api.handleError(dispatch, fetchItemsFailure));
    }

    dispatch(fetchItemsSuccess({result: []}));
    dispatch(setSearch(search));
};
