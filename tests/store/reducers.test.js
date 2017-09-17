import reducers from '../../src/store/reducers';

import { getJwt, setJwt } from '../../src/store/api';
import { signOut } from '../../src/store/User/actions';

describe('initial state', () => {
    it('shape', () => {
        const state = reducers(undefined, {});

        const expected = ['entities', 'form', 'list', 'user'];

        expect(Object.keys(state)).toEqual(expected);
    });
});

describe('app', () => {
    it(signOut.toString(), () => {
        setJwt({data: {jwt: 'JWT_TOKEN'}});

        const state = {
            entities: {
                lists: {
                    1: {
                        id: 1,
                        name: 'Weekly Shop',
                        list_items: [{
                            id: 2,
                            item_id: 3,
                            list_id: 1,
                            quantity: 1,
                            item: 3
                        }]
                    }
                },
                items: {3: {id: 3, name: 'Potato Waffles'}}
            },
            list: {
                ids: [1],
                isFetching: true,
                page: 2,
                total: 2
            },
            user: {
                id: 1,
                email: 'christy@myshopanalyst.com',
                isFetching: false
            }
        };

        const expected = {
            entities: {
                items: {},
                lists: {}
            },
            list: {
                ids: [],
                isFetching: false,
                page: 1,
                total: 0
            },
            user: {isFetching: false}
        };

        const updatedState = reducers(state, signOut());

        // External reducers
        expected.form = updatedState.form;

        expect(reducers(state, signOut())).toEqual(expected);
        expect(getJwt()).toBeNull();
    });
});
