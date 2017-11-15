import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';

// Schema
import { list as listSchema, listItem as listItemSchema } from '../schema';

// Selectors
import { getAddItemsData } from '../Item/selectors';
import { getPage } from './selectors';

/**
 * Add Items
 */
export const addItemsRequest = createAction('ADD_ITEMS_REQUEST');
export const addItemsSuccess = createAction('ADD_ITEMS_SUCCESS');
export const addItemsFailure = createAction('ADD_ITEMS_FAILURE');

export const addItems = id => (dispatch, getState, api) => {
    dispatch(addItemsRequest());

    return api.addItems(id, getAddItemsData(getState()))
        .then(api.checkStatus)
        .then(response => normalize(response.data.listItems, [listItemSchema]))
        .then(normalizedData => dispatch(addItemsSuccess({
            ...normalizedData,
            listId: id
        })))
        .catch(api.handleError(dispatch, addItemsFailure));
};

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
