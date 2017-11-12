// Actions
import { addItemsSuccess } from '../../../../src/store/List/actions';
import { deleteListItemSuccess, toggleCompletedSuccess } from '../../../../src/store/ListItem/actions';

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

describe('toggleCompleted', () => {
    it(toggleCompletedSuccess.toString(), () => {
        // Complete
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
                list_items: [2, 3, 1]
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

        expect(lists(state, toggleCompletedSuccess(payload))).toEqual(expected);

        // Incomplete
        state = {
            1: {
                id: 1,
                name: 'Weekly Shop',
                list_items: [2, 3, 1]
            }
        };

        expected = {
            1: {
                id: 1,
                name: 'Weekly Shop',
                list_items: [1, 2, 3]
            }
        };

        payload = {
            entities: {
                list_items: {
                    1: {
                        id: 1,
                        list_id: 1,
                        is_complete: false
                    }
                }
            },
            result: 1
        };

        expect(lists(state, toggleCompletedSuccess(payload))).toEqual(expected);
    });
});
