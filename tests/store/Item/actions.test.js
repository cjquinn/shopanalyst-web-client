import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../src/store/Item/actions';
import { signOut } from '../../../src/store/User/actions';

const mock = new MockAdapter(axios);
let store;

describe('fetchItems', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/items.json?search=Potato%20Waffles')
            .reply(403);

        return store.dispatch(actions.fetchItems('Potato Waffles'))
            .then(() => {
                const expected = [
                    {type: actions.fetchItemsRequest.toString()},
                    {type: actions.fetchItemsFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/items.json?search=Potato%20Waffles')
            .reply(200, {
                items: [{
                    id: 3,
                    name: 'Potato Waffles'
                }]
            });

        return store.dispatch(actions.fetchItems('Potato Waffles'))
            .then(() => {
                const expected = [
                    {type: actions.fetchItemsRequest.toString()},
                    {
                        type: actions.fetchItemsSuccess.toString(),
                        payload: {
                            entities: {
                                items: {3: {id: 3, name: 'Potato Waffles'}}
                            },
                            result: [3]
                        }
                    },
                    {
                        type: actions.setSearch.toString(),
                        payload: 'Potato Waffles'
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('empty search', () => {
        store.dispatch(actions.fetchItems(''));

        const expected = [
            {type: actions.fetchItemsRequest.toString()},
            {
                type: actions.fetchItemsSuccess.toString(),
                payload: {result: []}
            },
            {
                type: actions.setSearch.toString(),
                payload: ''
            }
        ];

        expect(store.getActions()).toEqual(expected);
    });
});
