// Actions
import { addItemsSuccess } from '../../../../src/store/List/actions';

// Reducers
import lists from '../../../../src/store/Entities/reducers/lists';

describe('initial state', () => {
    it('shape', () => {
        const expected = {};

        expect(lists(undefined, {})).toEqual(expected);
    });
});

describe('addItems', () => {
    it(addItemsSuccess.toString(), () => {
        const state = {
            1: {
                id: 1,
                name: 'Weekly Shop',
                list_items: [1]
            }
        };

        const expected = {
            1: {
                id: 1,
                name: 'Weekly Shop',
                list_items: [2, 1]
            }
        };

        const payload = {
            listId: 1,
            result: [2]
        };

        expect(lists(state, addItemsSuccess(payload))).toEqual(expected);
    });
});
