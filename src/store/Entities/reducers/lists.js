// Actions
import { addItemsSuccess } from '../../List/actions';
import { deleteListItemSuccess, toggleCompletedSuccess } from '../../ListItem/actions';

// Utils
import { mergeEntities } from './utils';

const addItems = (state, { payload }) => {
    const { listId, result } = payload;
    const list = state[listId];

    return {
        ...state,
        [listId]: {
            ...list,
            list_items: [
                ...result,
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

const moveCompleted = (state, { payload }) => {
    const listItem = payload.entities.list_items[payload.result];
    const list = state[listItem.list_id];
    
    const listItems = list.list_items.filter(listItemId => listItemId !== listItem.id);
    listItems.splice(listItem.is_complete ? listItems.length : 0, 0, listItem.id);

    return {
        ...state,
        [listItem.list_id]: {
            ...list,
            list_items: listItems
        }
    };
};

const lists = (state = {}, action) => {
    switch (action.type) {
        case addItemsSuccess.toString():
            return addItems(state, action);

        case deleteListItemSuccess.toString():
            return deleteListItem(state, action);

        case toggleCompletedSuccess.toString():
            return moveCompleted(state, action);

        default:
            return mergeEntities('lists')(state, action);
    }
};

export default lists;
