// Actions
import { addListItemSuccess } from '../../../../src/store/ListItem/actions';
import { deleteListItemSuccess } from '../../../../src/store/ListItem/actions';

// Reducers
import lists from '../../../../src/store/Entities/reducers/lists';

describe('initial state', () => {
    it('shape', () => {
        const expected = {};

        expect(lists(undefined, {})).toEqual(expected);
    });
});

describe('addListItem', () => {
    it(addListItemSuccess.toString(), () => {
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
            result: 2
        };

        expect(lists(state, addListItemSuccess(payload))).toEqual(expected);
    });
});

describe('deleteListItem', () => {
    it(deleteListItemSuccess.toString(), () => {
        let state = {
            1: {
                id: 1,
                name: 'Weekly Shop',
                list_items: [1, 2, 3]
            }
        };

        let expected = {
            1: {
                id: 1,
                name: 'Weekly Shop',
                list_items: [2, 3]
            }
        };

        let payload = {
            entities: {
                list_items: {
                    1: {
                        id: 1,
                        list_id: 1,
                        is_complete: true
                    }
                }
            },
            result: 1
        };

        expect(lists(state, deleteListItemSuccess(payload))).toEqual(expected);
    });
});
