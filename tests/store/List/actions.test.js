import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../src/store/List/actions';
import { signOut } from '../../../src/store/User/actions';

const mock = new MockAdapter(axios);
let store;

describe('fetchLists', () => {
    beforeEach(() => store = global.configureStore({list: {page: 1}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/lists.json?page=1')
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
            .onGet('/lists.json?page=1')
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
                }],
                total: 1
            });

        return store.dispatch(actions.fetchLists())
            .then(() => {
                const expected = [
                    {type: actions.fetchListsRequest.toString()},
                    {
                        type: actions.fetchListsSuccess.toString(),
                        payload: {
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
                            page: 1,
                            result: [1],
                            total: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchMoreLists', () => {
    beforeEach(() => store = global.configureStore({list: {page: 1}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/lists.json?page=2')
            .reply(403);

        return store.dispatch(actions.fetchMoreLists())
            .then(() => {
                const expected = [
                    {
                        type: actions.updatePage.toString(),
                        payload: 2
                    },
                    {type: actions.fetchListsRequest.toString()},
                    {type: actions.fetchListsFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/lists.json?page=2')
            .reply(200, {
                lists: [{
                    id: 2,
                    name: 'Weekly Shop 2',
                    list_items: [{
                        id: 3,
                        item_id: 4,
                        list_id: 2,
                        quantity: 1,
                        item: {
                            id: 4,
                            name: 'Yogurt'
                        }
                    }]
                }],
                total: 2
            });

        return store.dispatch(actions.fetchMoreLists())
            .then(() => {
                const expected = [
                    {
                        type: actions.updatePage.toString(),
                        payload: 2
                    },
                    {type: actions.fetchListsRequest.toString()},
                    {
                        type: actions.fetchListsSuccess.toString(),
                        payload: {
                            entities: {
                                lists: {
                                    2: {
                                        id: 2,
                                        name: 'Weekly Shop 2',
                                        list_items: [{
                                            id: 3,
                                            item_id: 4,
                                            list_id: 2,
                                            quantity: 1,
                                            item: 4
                                        }]
                                    }
                                },
                                items: {4: {id: 4, name: 'Yogurt'}}
                            },
                            page: 2,
                            result: [2],
                            total: 2
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
