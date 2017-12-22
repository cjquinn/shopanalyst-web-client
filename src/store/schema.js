import { schema } from 'normalizr';

export const item = new schema.Entity('items');

export const listItem = new schema.Entity('list_items', {item}, {
    processStrategy: entity => ({
        ...entity,
        item: entity.item || entity.item_id,
        quantity: entity.quantity || 1
    })
});

export const list = new schema.Entity('lists', {list_items: [listItem]}, {
    processStrategy: entity => ({
        ...entity,
        list_items: entity.list_items || [],
    })
});
