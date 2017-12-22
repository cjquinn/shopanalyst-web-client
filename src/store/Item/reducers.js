import { combineReducers } from 'redux';

// Actions
import * as actions from './actions';
import { addListItemSuccess } from '../ListItem/actions';

const ids = (state = [], action) => {
    switch (action.type) {
        case addListItemSuccess.toString():
            return [
                action.payload.entities.list_items[action.payload.result].item_id,
                ...state
            ].filter((id, index, self) =>
                index === self.indexOf(id)
            );

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

const reducers = combineReducers({
    ids,
    isFetching,
    search
});

export default reducers;
