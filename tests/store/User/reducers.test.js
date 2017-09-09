import reducers from '../../../src/store/User/reducers';

import * as actions from '../../../src/store/User/actions';

describe('initial state', () => {
    it('shape', () => {
        const expected = {};

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('createUser', () => {
    it(actions.createUserSuccess.toString(), () => {
        const state = {};

        const expected = {
            id: 1,
            email: 'christy@shopanalyst.com'
        };

        const payload = {
            id: 1,
            email: 'christy@shopanalyst.com'  
        };

        expect(reducers(state, actions.createUserSuccess(payload))).toEqual(expected);
    });
});
