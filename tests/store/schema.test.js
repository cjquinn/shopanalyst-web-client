import { normalize } from 'normalizr';

// Schema
import { listItem as listItemSchema } from '../../src/store/schema';

describe('listItemSchema', () => {
    it('processStrategy', () => {
        const payload = {
            id: 1,
            item_id: 1
        };

        const expected = {
            entities: {
                list_items: {
                    1: {
                        id: 1,
                        item_id: 1,
                        item: 1,
                        quantity: 1
                    }
                }
            },
            result: 1
        };

        expect(normalize(payload, listItemSchema)).toEqual(expected);
    });
});
