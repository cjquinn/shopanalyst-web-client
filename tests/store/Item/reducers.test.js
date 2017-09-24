import reducers from '../../../src/store/Item/reducers';

import * as actions from '../../../src/store/Item/actions';

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

describe('fetchLists', () => {
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
