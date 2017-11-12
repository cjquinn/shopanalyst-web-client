import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';

// Schema
import { listItem as listItemSchema } from '../schema';

/**
 * Decrease quantity
 */
export const decreaseQuantityRequest = createAction('DECREASE_QUANTITY_REQUEST');
export const decreaseQuantitySuccess = createAction('DECREASE_QUANTITY_SUCCESS');
export const decreaseQuantityFailure = createAction('DECREASE_QUANTITY_FAILURE');

export const decreaseQuantity = (listId, id) => (dispatch, getState, api) => {
    dispatch(decreaseQuantityRequest());

    return api.decreaseQuantity(listId, id)
        .then(api.checkStatus)
        .then(response => normalize(response.data.listItem, listItemSchema))
        .then(normalizedData => dispatch(decreaseQuantitySuccess(normalizedData)))
        .catch(api.handleError(dispatch, decreaseQuantityFailure));
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
 * Decrease quantity
 */
export const increaseQuantityRequest = createAction('INCREASE_QUANTITY_REQUEST');
export const increaseQuantitySuccess = createAction('INCREASE_QUANTITY_SUCCESS');
export const increaseQuantityFailure = createAction('INCREASE_QUANTITY_FAILURE');

export const increaseQuantity = (listId, id) => (dispatch, getState, api) => {
    dispatch(increaseQuantityRequest());

    return api.increaseQuantity(listId, id)
        .then(api.checkStatus)
        .then(response => normalize(response.data.listItem, listItemSchema))
        .then(normalizedData => dispatch(increaseQuantitySuccess(normalizedData)))
        .catch(api.handleError(dispatch, increaseQuantityFailure));
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
