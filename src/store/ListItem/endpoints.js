import { instance } from '../api';

export const addListItem = (listId, data) =>
    instance()
        .post(`/lists/${listId}/list-items.json`, data);

export const deleteListItem = (listId, id) =>
    instance()
        .delete(`/lists/${listId}/list-items/${id}.json`);

export const toggleCompleted = (listId, id) =>
    instance()
        .patch(`/lists/${listId}/list-items/${id}/toggle-completed.json`);

export const updateQuantity = (listId, id, quantity) =>
    instance()
        .patch(`/lists/${listId}/list-items/${id}/update-quantity.json`, {
            quantity
        });
