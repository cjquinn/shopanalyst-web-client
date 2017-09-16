import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../src/store/List/actions';
import { signOut } from '../../../src/store/User/actions';

const mock = new MockAdapter(axios);
let store;

describe('fetchLists', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/lists.json')
            .reply(403);

        return store.dispatch(actions.fetchLists())
            .then(() => {
                const expected = [
                    {type: actions.fetchListsRequest.toString()},
                    {type: actions.fetchListsFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/lists.json')
            .reply(200, {
                lists: [{
                    id: 1,
                    name: 'Weekly Shop',
                    list_items: [{
                        id: 2,
                        item_id: 3,
                        list_id: 1,
                        quantity: 1,
                        item: {
                            id: 3,
                            name: 'Potato Waffles'
                        }
                    }]
                }]
            });

        return store.dispatch(actions.fetchLists())
            .then(() => {
                const expected = [
                    {type: actions.fetchListsRequest.toString()},
                    {
                        type: actions.fetchListsSuccess.toString(),
                        payload: {
                            entities: {
                                lists: {1: {id: 1, name: 'Weekly Shop'}},
                                list_items: {2: {id: 2, item_id: 3, list_id: 1, quantity: 1}},
                                items: {3: {id: 3, name: 'Potato Waffles'}}
                            },
                            result: [1]
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
