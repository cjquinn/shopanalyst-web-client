import reducers from '../../../src/store/ListItem/reducers';

import * as actions from '../../../src/store/ListItem/actions';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            isAdding: false
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('addListItem', () => {
    it(actions.addListItemRequest.toString(), () => {
        const state = {
            isAdding: false
        };

        const expected = {
            isAdding: true
        };

        expect(reducers(state, actions.addListItemRequest())).toEqual(expected);
    });
    
    it(actions.addListItemFailure.toString(), () => {
        const state = {
            isAdding: true
        };

        const expected = {
            isAdding: false
        };

        expect(reducers(state, actions.addListItemFailure())).toEqual(expected);
    });

    it(actions.addListItemSuccess.toString(), () => {
        const state = {
            isAdding: true
        };

        const expected = {
            isAdding: false
        };

        expect(reducers(state, actions.addListItemSuccess())).toEqual(expected);
    });
});
