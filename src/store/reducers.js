import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// Api
import { removeJwt } from './api';

// Actions
import { signOut } from './User/actions';

// Reducers
import entities from './Entities/reducers';
import list from './List/reducers';
import user from './User/reducers';

const app = combineReducers({
    entities,
    form,
    list,
    user
});

const reducers = (state, action) => {
    if (action.type === signOut.toString()) {
        removeJwt();

        // Only undefine state from this app
        state.entities = undefined;
        state.list = undefined;
        state.user = undefined;
    }

    return app(state, action);
};

export default reducers;
