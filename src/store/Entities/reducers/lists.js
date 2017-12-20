// Actions
import { addListItemSuccess, deleteListItemSuccess } from '../../ListItem/actions';

// Utils
import { mergeEntities } from './utils';

const addItem = (state, { payload }) => {
    const { listId, result } = payload;
    const list = state[listId];

    return {
        ...state,
        [listId]: {
            ...list,
            list_items: [
                result,
                ...list.list_items
            ]
        }
    };
};

const deleteListItem = (state, { payload }) => {
    const listItem = payload.entities.list_items[payload.result];
    const list = state[listItem.list_id];

    return {
        ...state,
        [listItem.list_id]: {
            ...list,
            list_items: list.list_items
                .filter(listItemId => listItemId !== listItem.id)
        }
    };
};

const lists = (state = {}, action) => {
    switch (action.type) {
        case addListItemSuccess.toString():
            return addItem(state, action);

        case deleteListItemSuccess.toString():
            return deleteListItem(state, action);

        default:
            return mergeEntities('lists')(state, action);
    }
};

export default lists;
