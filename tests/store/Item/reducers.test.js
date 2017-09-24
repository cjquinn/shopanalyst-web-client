import reducers from '../../../src/store/Item/reducers';

import * as actions from '../../../src/store/Item/actions';

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
    it(actions.fetchItemsRequest.toString(), () => {
        const state = {
            ids: [],
            isFetching: false
        };

        const expected = {
            ids: [],
            isFetching: true
        };

        expect(reducers(state, actions.fetchItemsRequest())).toEqual(expected);
    });

    it(actions.fetchItemsFailure.toString(), () => {
        const state = {
            ids: [],
            isFetching: true
        };

        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(state, actions.fetchItemsFailure())).toEqual(expected);
    });

    it(actions.fetchItemsSuccess.toString(), () => {
        const state = {
            ids: [],
            isFetching: true
        };

        const expected = {
            ids: [1],
            isFetching: false
        };

        const payload = {result: [1]};

        expect(reducers(state, actions.fetchItemsSuccess(payload))).toEqual(expected);
    });
});
