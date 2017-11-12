import { instance } from '../api';

export const decreaseQuantity = (listId, id) =>
    instance()
        .patch(`/lists/${listId}/list-items/${id}/decrease-quantity.json`);

export const deleteListItem = (listId, id) =>
    instance()
        .delete(`/lists/${listId}/list-items/${id}.json`);

export const increaseQuantity = (listId, id) =>
    instance()
        .patch(`/lists/${listId}/list-items/${id}/increase-quantity.json`);

export const toggleCompleted = (listId, id) =>
    instance()
        .patch(`/lists/${listId}/list-items/${id}/toggle-completed.json`);

export const updateQuantity = (listId, id, quantity) =>
    instance()
        .patch(`/lists/${listId}/list-items/${id}/update-quantity.json`, {
            quantity
        });
