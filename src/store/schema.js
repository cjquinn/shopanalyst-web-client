import { schema } from 'normalizr';

export const item = new schema.Entity('items');

export const list = new schema.Entity('lists', {
    list_items: [{item: item}]
});
