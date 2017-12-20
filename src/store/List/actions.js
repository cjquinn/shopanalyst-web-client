import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';

// Schema
import { list as listSchema } from '../schema';

// Selectors
import { getPage } from './selectors';

/**
 * Create List
 */
export const createListRequest = createAction('CREATE_LIST_REQUEST');
export const createListSuccess = createAction('CREATE_LIST_SUCCESS');
export const createListFailure = createAction('CREATE_LIST_FAILURE');

export const createList = data => (dispatch, getState, api) => {
    dispatch(createListRequest());

    return api.createList(data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.list, listSchema))
        .then(normalizedData => dispatch(createListSuccess(normalizedData)))
        .catch(api.handleError(dispatch, createListFailure));
};

/**
 * Duplicate List
 */
export const duplicateListRequest = createAction('DUPLICATE_LIST_REQUEST');
export const duplicateListSuccess = createAction('DUPLICATE_LIST_SUCCESS');
export const duplicateListFailure = createAction('DUPLICATE_LIST_FAILURE');

export const duplicateList = id => (dispatch, getState, api) => {
    dispatch(duplicateListRequest());

    return api.duplicateList(id)
        .then(api.checkStatus)
        .then(response => normalize(response.data.list, listSchema))
        .then(normalizedData => dispatch(duplicateListSuccess(normalizedData)))
        .catch(api.handleError(dispatch, duplicateListFailure));
};

/**
 * Fetch List
 */
export const fetchListRequest = createAction('FETCH_LIST_REQUEST');
export const fetchListSuccess = createAction('FETCH_LIST_SUCCESS');
export const fetchListFailure = createAction('FETCH_LIST_FAILURE');

export const fetchList = id => (dispatch, getState, api) => {
    dispatch(fetchListRequest());

    return api.fetchList(id)
        .then(api.checkStatus)
        .then(response => normalize(response.data.list, listSchema))
        .then(normalizedData => dispatch(fetchListSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchListFailure));
};

/**
 * Fetch Lists
 */
export const fetchListsRequest = createAction('FETCH_LISTS_REQUEST');
export const fetchListsSuccess = createAction('FETCH_LISTS_SUCCESS');
export const fetchListsFailure = createAction('FETCH_LISTS_FAILURE');

export const fetchLists = page => (dispatch, getState, api) => {
    dispatch(fetchListsRequest());

    page = page || 1;

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

/**
 * Update List
 */
export const updateListRequest = createAction('UPDATE_LIST_REQUEST');
export const updateListSuccess = createAction('UPDATE_LIST_SUCCESS');
export const updateListFailure = createAction('UPDATE_LIST_FAILURE');

export const updateList = (id, data) => (dispatch, getState, api) => {
    dispatch(updateListRequest());

    return api.updateList(id, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.list, listSchema))
        .then(normalizedData => dispatch(updateListSuccess(normalizedData)))
        .catch(api.handleError(dispatch, updateListFailure));
};
