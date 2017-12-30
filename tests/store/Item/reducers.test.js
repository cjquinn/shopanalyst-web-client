// Actions
import * as actions from '../../../src/store/Item/actions';
import { addListItemSuccess } from '../../../src/store/ListItem/actions';

// Reducers
import reducers from '../../../src/store/Item/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            ids: [],
            isFetching: false,
            lastAddedId: null,
            search: ''
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('addListItem', () => {
    it(addListItemSuccess.toString(), () => {
        const state = {
            ids: [1],
            isFetching: false,
            lastAddedId: null,
            search: 'Eggs'
        };

        const expected = {
            ids: [1],
            isFetching: false,
            lastAddedId: 2,
            search: ''
        };

        const payload = {
            entities: {
                items: {
                    2: {
                        id: 2,
                        name: 'Eggs'
                    }
                },
                list_items: {
                    1: {
                        item_id: 2
                    }
                }
            },
            result: 1
        };

        expect(reducers(state, addListItemSuccess(payload))).toEqual(expected);
    });
});

describe('fetchItems', () => {
    it(actions.setSearch.toString(), () => {
        let state = {
            ids: [],
            isFetching: false,
            lastAddedId: 1,
            search: ''
        };

        let expected = {
            ids: [],
            isFetching: false,
            lastAddedId: null,
            search: 'Potato Waffles'
        };

        expect(reducers(state, actions.setSearch('Potato Waffles'))).toEqual(expected);

        state = {
            ids: [1],
            isFetching: false,
            lastAddedId: 1,
            search: 'Potato Waffles'
        };

        expected = {
            ids: [],
            isFetching: false,
            lastAddedId: null,
            search: ''
        };

        expect(reducers(state, actions.setSearch(''))).toEqual(expected);
    });

    it(actions.fetchItemsRequest.toString(), () => {
        const state = {
            ids: [],
            isFetching: false,
            lastAddedId: null,
            search: ''
        };

        const expected = {
            ids: [],
            isFetching: true,
            lastAddedId: null,
            search: ''
        };

        expect(reducers(state, actions.fetchItemsRequest())).toEqual(expected);
    });

    it(actions.fetchItemsFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            lastAddedId: null,
            search: ''
        };

        const expected = {
            ids: [],
            isFetching: false,
            lastAddedId: null,
            search: ''
        };

        expect(reducers(state, actions.fetchItemsFailure())).toEqual(expected);
    });

    it(actions.fetchItemsSuccess.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            lastAddedId: null,
            search: ''
        };

        const expected = {
            ids: [1],
            isFetching: false,
            lastAddedId: null,
            search: ''
        };

        const payload = {result: [1]};

        expect(reducers(state, actions.fetchItemsSuccess(payload))).toEqual(expected);
    });
});
