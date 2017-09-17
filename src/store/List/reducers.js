import { combineReducers } from 'redux';

// Actions
import * as actions from './actions';

const ids = (state = [], action) => {
    switch (action.type) {
        case actions.createListSuccess.toString():
            return [
                action.payload.result,
                ...state
            ];

        case actions.fetchListsSuccess.toString():
            if (action.payload.page === 1) {
                return action.payload.result;
            }

            return [
                ...state,
                ...action.payload.result
            ];

        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.fetchListsRequest.toString():
            return true;

        case actions.fetchListsSuccess.toString():
        case actions.fetchListsFailure.toString():
            return false;

        default:
            return state;
    }
};

const page = (state = 1, action) => {
    switch (action.type) {
        case actions.updatePage.toString():
            return action.payload;

        default:
            return state;
    }
};

const total = (state = 0, action) => {
    switch (action.type) {
        case actions.createListSuccess.toString():
            return state + 1;

        case actions.fetchListsSuccess.toString():
            return action.payload.total;

        default:
            return state;
    }
};

const reducers = combineReducers({
    ids,
    isFetching,
    page,
    total
});

export default reducers;
