import { merge } from 'lodash';

const initialState = {
    items: {},
    list_items: {},
    lists: {}
};

const entities = (state = initialState, action) => {
    if (action.payload && action.payload.entities) {
        return merge({}, state, action.payload.entities);
    }

    return state;
};

export default entities;
