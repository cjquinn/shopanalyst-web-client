// Actions
import { addItemsSuccess } from '../../List/actions';

// Utils
import { mergeEntities } from './utils';

const addItems = (state, action) => {
    const { payload: { listId, result } } = action;
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

const lists = (state = {}, action) => {
    switch (action.type) {
        case addItemsSuccess.toString():
            return addItems(state, action);

        default:
            return mergeEntities('lists')(state, action);
    }
};

export default lists;
