import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';

// Schema
import { list as listSchema } from '../schema';

// Selectors
import { getPage } from './selectors';

/**
 * Fetch Lists
 */
export const fetchListsRequest = createAction('FETCH_LISTS_REQUEST');
export const fetchListsSuccess = createAction('FETCH_LISTS_SUCCESS');
export const fetchListsFailure = createAction('FETCH_LISTS_FAILURE');

export const fetchLists = page => (dispatch, getState, api) => {
    dispatch(fetchListsRequest());

    page = page || getPage(getState());

    return api.fetchLists(page)
        .then(api.checkStatus)
        .then(response =>
            dispatch(
                fetchListsSuccess({
                    ...normalize(response.data.lists, [listSchema]),
                    page: page,
                    total: response.data.total
                })
            )
        )
        .catch(api.handleError(dispatch, fetchListsFailure));
};

/**
 * Fetch More Lists
 */
export const updatePage = createAction('UPDATE_PAGE');

export const fetchMoreLists = () => (dispatch, getState) => {
    const page = getPage(getState()) + 1;
    dispatch(updatePage(page));
    return dispatch(fetchLists(page));
};
