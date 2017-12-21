import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';

// Schema
import { listItem as listItemSchema } from '../schema';

/**
 * Add list item
 */
export const addListItemRequest = createAction('ADD_LIST_ITEM_REQUEST');
export const addListItemSuccess = createAction('ADD_LIST_ITEM_SUCCESS');
export const addListItemFailure = createAction('ADD_LIST_ITEM_FAILURE');

export const addListItem = (listId, item) => (dispatch, getState, api) => {
    dispatch(addListItemRequest());

    const data = item.id
        ? {item_id: item.id}
        : {item};

    return api.addListItem(listId, data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.listItem, listItemSchema))
        .then(normalizedData =>
            dispatch(addListItemSuccess({
                ...normalizedData,
                listId
            }))
        )
        .catch(api.handleError(dispatch, addListItemFailure));
};

/**
 * Delete list item
 */
export const deleteListItemRequest = createAction('DELETE_LIST_ITEM_REQUEST');
export const deleteListItemSuccess = createAction('DELETE_LIST_ITEM_SUCCESS');
export const deleteListItemFailure = createAction('DELETE_LIST_ITEM_FAILURE');

export const deleteListItem = (listId, id) => (dispatch, getState, api) => {
    dispatch(deleteListItemRequest());

    return api.deleteListItem(listId, id)
        .then(api.checkStatus)
        .then(response => normalize(response.data.listItem, listItemSchema))
        .then(normalizedData => dispatch(deleteListItemSuccess(normalizedData)))
        .catch(api.handleError(dispatch, deleteListItemFailure));
};

/**
 * Toggle completed
 */
export const toggleCompletedRequest = createAction('TOGGLE_COMPLETED_REQUEST');
export const toggleCompletedSuccess = createAction('TOGGLE_COMPLETED_SUCCESS');
export const toggleCompletedFailure = createAction('TOGGLE_COMPLETED_FAILURE');

export const toggleCompleted = (listId, id) => (dispatch, getState, api) => {
    dispatch(toggleCompletedRequest());

    return api.toggleCompleted(listId, id)
        .then(api.checkStatus)
        .then(response => normalize(response.data.listItem, listItemSchema))
        .then(normalizedData => dispatch(toggleCompletedSuccess(normalizedData)))
        .catch(api.handleError(dispatch, toggleCompletedFailure));
};

/**
 * Update quantity
 */
export const updateQuantityRequest = createAction('UPDATE_QUANTITY_REQUEST');
export const updateQuantitySuccess = createAction('UPDATE_QUANTITY_SUCCESS');
export const updateQuantityFailure = createAction('UPDATE_QUANTITY_FAILURE');

export const updateQuantity = (listId, id, quantity) => (dispatch, getState, api) => {
    dispatch(updateQuantityRequest());

    return api.updateQuantity(listId, id, quantity)
        .then(api.checkStatus)
        .then(response => normalize(response.data.listItem, listItemSchema))
        .then(normalizedData => dispatch(updateQuantitySuccess(normalizedData)))
        .catch(api.handleError(dispatch, updateQuantityFailure));
};
