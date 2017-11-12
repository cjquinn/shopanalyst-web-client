import reducers from '../../../src/store/List/reducers';

import * as actions from '../../../src/store/List/actions';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            ids: [],
            isFetching: false,
            page: 1,
            total: 0
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('createList', () => {
    it(actions.createListSuccess.toString(), () => {
        const state = {
            ids: [1],
            isFetching: false,
            page: 1,
            total: 1
        };

        const expected = {
            ids: [2, 1],
            isFetching: false,
            page: 1,
            total: 2
        };

        const payload = {
            result: 2
        };

        expect(reducers(state, actions.createListSuccess(payload))).toEqual(expected);
    });
});

describe('fetchLists', () => {
    it(actions.fetchListsRequest.toString(), () => {
        const state = {
            ids: [],
            isFetching: false,
            page: 1,
            total: 0
        };

        const expected = {
            ids: [],
            isFetching: true,
            page: 1,
            total: 0
        };

        expect(reducers(state, actions.fetchListsRequest())).toEqual(expected);
    });

    it(actions.fetchListsFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            page: 1,
            total: 0
        };

        const expected = {
            ids: [],
            isFetching: false,
            page: 1,
            total: 0
        };

        expect(reducers(state, actions.fetchListsFailure())).toEqual(expected);
    });

    it(actions.fetchListsSuccess.toString(), () => {
        const state = {
            ids: [],
            isFetching: true,
            page: 1,
            total: 0
        };

        const expected = {
            ids: [1],
            isFetching: false,
            page: 1,
            total: 1
        };

        const payload = {
            result: [1],
            page: 1,
            total: 1
        };

        expect(reducers(state, actions.fetchListsSuccess(payload))).toEqual(expected);
    });
});

describe('fetchMoreLists', () => {
    it(actions.updatePage.toString(), () => {
        const state = {
            ids: [],
            isFetching: false,
            page: 1,
            total: 0
        };

        const expected = {
            ids: [],
            isFetching: false,
            page: 2,
            total: 0
        };

        expect(reducers(state, actions.updatePage(2))).toEqual(expected);
    });

    it(actions.fetchListsSuccess.toString(), () => {
        const state = {
            ids: [1],
            isFetching: true,
            page: 2,
            total: 1
        };

        const expected = {
            ids: [1, 2],
            isFetching: false,
            page: 2,
            total: 2
        };

        const payload = {
            result: [2],
            page: 2,
            total: 2
        };

        expect(reducers(state, actions.fetchListsSuccess(payload))).toEqual(expected);
    });
});
