import reducers from '../../../src/store/User/reducers';

import * as actions from '../../../src/store/User/actions';

describe('initial state', () => {
    it('shape', () => {
        const expected = {};

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('signIn', () => {
    it(actions.signInSuccess.toString(), () => {
        const state = {};

        const expected = {
            id: 1,
            email: 'christy@shopanalyst.com'
        };

        const payload = {
            id: 1,
            email: 'christy@shopanalyst.com'  
        };

        expect(reducers(state, actions.signUpSuccess(payload))).toEqual(expected);
    });
});

describe('signUp', () => {
    it(actions.signUpSuccess.toString(), () => {
        const state = {};

        const expected = {
            id: 1,
            email: 'christy@shopanalyst.com'
        };

        const payload = {
            id: 1,
            email: 'christy@shopanalyst.com'  
        };

        expect(reducers(state, actions.signUpSuccess(payload))).toEqual(expected);
    });
});
