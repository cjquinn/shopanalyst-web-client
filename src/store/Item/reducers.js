import { combineReducers } from 'redux';

// Actions
import * as actions from './actions';

const ids = (state = [], action) => {
    switch (action.type) {
        case actions.fetchItemsSuccess.toString():
            return action.payload.result;

        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.fetchItemsRequest.toString():
            return true;

        case actions.fetchItemsFailure.toString():
        case actions.fetchItemsSuccess.toString():
            return false;

        default:
            return state;
    }  
};

const search  = (state = '', action) => {
    switch (action.type) {
        case actions.setSearch.toString():
            return action.payload;

        default:
            return state;
    }
};

const selected = (state = [], action) => {
    switch (action.type) {
        case actions.deselectItem.toString():
            return state.filter(
                item => (item.name || item) !== (action.payload.id || action.payload.name)
            );

        case actions.selectItem.toString():
            if (state.some(
                item => (item.name || item) === (action.payload.id || action.payload.name)
            )) {
                return state;
            }

            return [
                action.payload.id || action.payload,
                ...state
            ];

        default:
            return state;
    }
};

const reducers = combineReducers({
    ids,
    isFetching,
    search,
    selected
});

export default reducers;
