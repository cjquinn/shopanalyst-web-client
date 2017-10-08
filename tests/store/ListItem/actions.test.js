import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../src/store/ListItem/actions';
import { signOut } from '../../../src/store/User/actions';

const mock = new MockAdapter(axios);
let store;

describe('decreaseQuantity', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/lists/1/list-items/1/decrease-quantity.json')
            .reply(403);

        return store.dispatch(actions.decreaseQuantity(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.decreaseQuantityRequest.toString()},
                    {type: actions.decreaseQuantityFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/lists/1/list-items/1/decrease-quantity.json')
            .reply(200, {
                listItem: {id: 1}
            });

        return store.dispatch(actions.decreaseQuantity(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.decreaseQuantityRequest.toString()},
                    {
                        type: actions.decreaseQuantitySuccess.toString(),
                        payload: {
                            entities: {
                                list_items: {1: {id: 1}}
                            },
                            result: 1
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
                listItem: {id: 1}
            });

        return store.dispatch(actions.deleteListItem(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.deleteListItemRequest.toString()},
                    {
                        type: actions.deleteListItemSuccess.toString(),
                        payload: {
                            entities: {
                                list_items: {1: {id: 1}}
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('increaseQuantity', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/lists/1/list-items/1/increase-quantity.json')
            .reply(403);

        return store.dispatch(actions.increaseQuantity(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.increaseQuantityRequest.toString()},
                    {type: actions.increaseQuantityFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/lists/1/list-items/1/increase-quantity.json')
            .reply(200, {
                listItem: {id: 1}
            });

        return store.dispatch(actions.increaseQuantity(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.increaseQuantityRequest.toString()},
                    {
                        type: actions.increaseQuantitySuccess.toString(),
                        payload: {
                            entities: {
                                list_items: {1: {id: 1}}
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
                listItem: {id: 1}
            });

        return store.dispatch(actions.toggleCompleted(1, 1))
            .then(() => {
                const expected = [
                    {type: actions.toggleCompletedRequest.toString()},
                    {
                        type: actions.toggleCompletedSuccess.toString(),
                        payload: {
                            entities: {
                                list_items: {1: {id: 1}}
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
