import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// Reducers
import user from './User/reducers';

const reducers = combineReducers({
    form,
    user
});

export default reducers;
