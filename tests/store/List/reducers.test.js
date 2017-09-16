import reducers from '../../../src/store/List/reducers';

import * as actions from '../../../src/store/List/actions';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchLists', () => {
    it(actions.fetchListsRequest.toString(), () => {
        const state = {
            ids: [],
            isFetching: false
        };

        const expected = {
            ids: [],
            isFetching: true
        };

        expect(reducers(state, actions.fetchListsRequest())).toEqual(expected);
    });

    it(actions.fetchListsFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true
        };

        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(state, actions.fetchListsFailure())).toEqual(expected);
    });

    it(actions.fetchListsSuccess.toString(), () => {
        const state = {
            ids: [],
            isFetching: true
        };

        const expected = {
            ids: [1],
            isFetching: false
        };

        const payload = {
            result: [1]
        };

        expect(reducers(state, actions.fetchListsSuccess(payload))).toEqual(expected);
    });
});
