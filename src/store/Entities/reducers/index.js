import { combineReducers } from 'redux';

// Reducers
import lists from './lists';

// Utils
import { mergeEntities } from './utils';

const reducers = combineReducers({
    items: mergeEntities('items'),
    list_items: mergeEntities('list_items'),
    lists
});

export default reducers;
