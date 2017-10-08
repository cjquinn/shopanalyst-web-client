import reducers from '../../../src/store/Item/reducers';

import * as actions from '../../../src/store/Item/actions';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            ids: [],
            isFetching: false,
            search: '',
            selected: []
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchItems', () => {
    it(actions.setSearch.toString(), () => {
        const state = {
            ids: [],
            isFetching: false,
            search: '',
            selected: []
        };

        const expected = {
            ids: [],
            isFetching: false,
            search: 'Potato Waffles',
            selected: []
        };

        expect(reducers(state, actions.setSearch('Potato Waffles'))).toEqual(expected);
    });

    it(actions.fetchItemsRequest.toString(), () => {
        const state = {
            ids: [],
            isFetching: false,
            search: '',
            selected: []
        };

        const expected = {
            ids: [],
            isFetching: true,
            search: '',
            selected: []
        };

        expect(reducers(state, actions.fetchItemsRequest())).toEqual(expected);
    });

    it(actions.fetchItemsFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            search: '',
            selected: []
        };

        const expected = {
            ids: [],
            isFetching: false,
            search: '',
            selected: []
        };

        expect(reducers(state, actions.fetchItemsFailure())).toEqual(expected);
    });

    it(actions.fetchItemsSuccess.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            search: '',
            selected: []
        };

        const expected = {
            ids: [1],
            isFetching: false,
            search: '',
            selected: []
        };

        const payload = {result: [1]};

        expect(reducers(state, actions.fetchItemsSuccess(payload))).toEqual(expected);
    });
});

describe('addItems', () => {
    it(actions.selectItem.toString(), () => {
        // Select new item
        let state = {
            ids: [],
            isFetching: false,
            search: '',
            selected: []
        };

        let expected = {
            ids: [],
            isFetching: false,
            search: '',
            selected: [{name: 'Potato Waffles'}]
        };

        let payload = {name: 'Potato Waffles'};

        expect(reducers(state, actions.selectItem(payload))).toEqual(expected);

        // Select item
        state = {
            ids: [],
            isFetching: false,
            search: '',
            selected: [{name: 'Potato Waffles'}]
        };

        expected = {
            ids: [],
            isFetching: false,
            search: '',
            selected: [
                1,
                {name: 'Potato Waffles'}
            ]
        };

        payload = {id: 1};

        expect(reducers(state, actions.selectItem(payload))).toEqual(expected);
    });

    it(actions.deselectItem.toString(), () => {
        let state = {
            ids: [],
            isFetching: false,
            search: '',
            selected: [
                {name: 'Potato Waffles'},
                1
            ]
        };

        let expected = {
            ids: [],
            isFetching: false,
            search: '',
            selected: [{name: 'Potato Waffles'}]
        };

        let payload = {
            id: 1,
            name: 'Potato'
        };

        expect(reducers(state, actions.deselectItem(payload))).toEqual(expected);

        state = {
            ids: [],
            isFetching: false,
            search: '',
            selected: [
                {name: 'Potato Waffles'},
                1
            ]
        };

        expected = {
            ids: [],
            isFetching: false,
            search: '',
            selected: [1]
        };

        payload = {name: 'Potato Waffles'};

        expect(reducers(state, actions.deselectItem(payload))).toEqual(expected);
    });
});
