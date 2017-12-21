import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../src/store/ListItem/actions';
import { signOut } from '../../../src/store/User/actions';

const mock = new MockAdapter(axios);
let store;

describe('addListItem', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost('/lists/1/list-items.json')
            .reply(403);

        return store.dispatch(actions.addListItem(1, {}))
            .then(() => {
                const expected = [
                    {type: actions.addListItemRequest.toString()},
                    {type: actions.addListItemFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost('/lists/1/list-items.json')
            .reply(200, {
                listItem: {
                    id: 1,
                    item_id: 1
                }
            });

        return store.dispatch(actions.addListItem(1, {}))
            .then(() => {
                const expected = [
                    {type: actions.addListItemRequest.toString()},
                    {
                        type: actions.addListItemSuccess.toString(),
                        payload: {
                            entities: {
                                list_items: {
                                    1: {
                                        id: 1,
                                        item_id: 1,
                                        item: 1,
                                        quantity: 1
                                    }
                                }
                            },
                            result: 1,
                            listId: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('deleteListItem', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onDelete('/lists/1/list-items/1.json')
            .reply(403);

        return store.dispatch(actions.deleteListItem(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.deleteListItemRequest.toString()},
                    {type: actions.deleteListItemFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onDelete('/lists/1/list-items/1.json')
            .reply(200, {
                listItem: {
                    id: 1,
                    item_id: 1
                }
            });

        return store.dispatch(actions.deleteListItem(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.deleteListItemRequest.toString()},
                    {
                        type: actions.deleteListItemSuccess.toString(),
                        payload: {
                            entities: {
                                list_items: {
                                    1: {
                                        id: 1,
                                        item_id: 1,
                                        item: 1,
                                        quantity: 1
                                    }
                                }
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('toggleCompleted', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/lists/1/list-items/1/toggle-completed.json')
            .reply(403);

        return store.dispatch(actions.toggleCompleted(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.toggleCompletedRequest.toString()},
                    {type: actions.toggleCompletedFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/lists/1/list-items/1/toggle-completed.json')
            .reply(200, {
                listItem: {
                    id: 1,
                    item_id: 1
                }
            });

        return store.dispatch(actions.toggleCompleted(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.toggleCompletedRequest.toString()},
                    {
                        type: actions.toggleCompletedSuccess.toString(),
                        payload: {
                            entities: {
                                list_items: {
                                    1: {
                                        id: 1,
                                        item_id: 1,
                                        item: 1,
                                        quantity: 1
                                    }
                                }
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('updateQuantity', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/lists/1/list-items/1/update-quantity.json')
            .reply(403);

        return store.dispatch(actions.updateQuantity(1, 1, 10))
            .then(() => {
                const expected = [
                    {type: actions.updateQuantityRequest.toString()},
                    {type: actions.updateQuantityFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/lists/1/list-items/1/update-quantity.json')
            .reply(200, {
                listItem: {
                    id: 1,
                    item_id: 1
                }
            });

        return store.dispatch(actions.updateQuantity(1, 1, 10))
            .then(() => {
                const expected = [
                    {type: actions.updateQuantityRequest.toString()},
                    {
                        type: actions.updateQuantitySuccess.toString(),
                        payload: {
                            entities: {
                                list_items: {
                                    1: {
                                        id: 1,
                                        item_id: 1,
                                        item: 1,
                                        quantity: 1
                                    }
                                }
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
