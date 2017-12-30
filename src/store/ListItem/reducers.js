import { combineReducers } from 'redux';

// Actions
import * as actions from './actions';

const isAdding = (state = false, action) => {
    switch (action.type) {
        case actions.addListItemRequest.toString():
            return true;

        case actions.addListItemSuccess.toString():
        case actions.addListItemFailure.toString():
            return false;

        default:
            return state;
    }
};

const reducers = combineReducers({
    isAdding
});

export default reducers;
