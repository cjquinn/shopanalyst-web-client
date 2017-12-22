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
            search: ''
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('addListItem', () => {
    it(addListItemSuccess.toString(), () => {
        let state = {
            ids: [],
            isFetching: false,
            search: 'Eggs'
        };

        let expected = {
            ids: [2],
            isFetching: false,
            search: 'Eggs'
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

        state = {
            ids: [2],
            isFetching: false,
            search: 'Eggs'
        };

        expected = {
            ids: [2],
            isFetching: false,
            search: 'Eggs'
        };

        expect(reducers(state, addListItemSuccess(payload))).toEqual(expected);

        state = {
            ids: [1],
            isFetching: false,
            search: 'Eggs'
        };

        expected = {
            ids: [2, 1],
            isFetching: false,
            search: 'Eggs'
        };

        expect(reducers(state, addListItemSuccess(payload))).toEqual(expected);
    });
});

describe('fetchItems', () => {
    it(actions.setSearch.toString(), () => {
        const state = {
            ids: [],
            isFetching: false,
            search: ''
        };

        const expected = {
            ids: [],
            isFetching: false,
            search: 'Potato Waffles'
        };

        expect(reducers(state, actions.setSearch('Potato Waffles'))).toEqual(expected);
    });

    it(actions.fetchItemsRequest.toString(), () => {
        const state = {
            ids: [],
            isFetching: false,
            search: ''
        };

        const expected = {
            ids: [],
            isFetching: true,
            search: ''
        };

        expect(reducers(state, actions.fetchItemsRequest())).toEqual(expected);
    });

    it(actions.fetchItemsFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            search: ''
        };

        const expected = {
            ids: [],
            isFetching: false,
            search: ''
        };

        expect(reducers(state, actions.fetchItemsFailure())).toEqual(expected);
    });

    it(actions.fetchItemsSuccess.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            search: ''
        };

        const expected = {
            ids: [1],
            isFetching: false,
            search: ''
        };

        const payload = {result: [1]};

        expect(reducers(state, actions.fetchItemsSuccess(payload))).toEqual(expected);
    });
});
