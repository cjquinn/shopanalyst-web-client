import reducers from '../../src/store/reducers';

import { getJwt, setJwt } from '../../src/store/api';
import { signOut } from '../../src/store/User/actions';

describe('initial state', () => {
    it('shape', () => {
        const state = reducers(undefined, {});

        const expected = ['form', 'user'];

        expect(Object.keys(state)).toEqual(expected);
    });
});

describe('signOut', () => {
    it(signOut.toString(), () => {
        setJwt({data: {jwt: 'JWT_TOKEN'}});

        const state = {
            user: {
                id: 1,
                email: 'christy@myshopanalyst.com',
                isFetching: false
            }
        };

        const expected = {user: {isFetching: false}};

        const updatedState = reducers(state, signOut());

        // External reducers
        expected.form = updatedState.form;

        expect(reducers(state, signOut())).toEqual(expected);
        expect(getJwt()).toBeNull();
    });
});
