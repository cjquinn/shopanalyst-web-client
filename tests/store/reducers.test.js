import { normalize } from 'normalizr';

// Actions
import { signOut } from '../../src/store/User/actions';

// Api
import { getJwt, setJwt } from '../../src/store/api';

// Reducers
import reducers from '../../src/store/reducers';

// Schema
import { list as listSchema } from '../../src/store/schema';

describe('initial state', () => {
    it('shape', () => {
        const state = reducers(undefined, {});

        const expected = ['entities', 'form', 'item', 'list', 'user'];

        expect(Object.keys(state)).toEqual(expected);
    });
});

describe('app', () => {
    it(signOut.toString(), () => {
        setJwt({data: {jwt: 'JWT_TOKEN'}});

        const listData = {
            id: 1,
            name: 'Weekly Shop',
            list_items: [
                {
                    id: 2,
                    item_id: 3,
                    list_id: 1,
                    quantity: 1,
                    item: {
                        id: 3,
                        name: 'Potato Waffles'
                    }
                }
            ]
        };

        const state = {
            entities: normalize(listData, listSchema),
            item: {
                ids: [3],
                isFetching: true,
                search: 'Testing',
                selected: [3]
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
                list_items: {},
                lists: {}
            },
            item: {
                ids: [],
                isFetching: false,
                search: ''
            },
            list: {
                ids: [],
                isFetching: false,
                page: 1,
                total: 0
            },
            user: {isLoading: false}
        };

        const updatedState = reducers(state, signOut());

        // External reducers
        expected.form = updatedState.form;

        expect(reducers(state, signOut())).toEqual(expected);
        expect(getJwt()).toBeNull();
    });
});
