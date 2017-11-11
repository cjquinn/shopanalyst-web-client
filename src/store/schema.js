import { schema } from 'normalizr';

export const item = new schema.Entity('items');

export const listItem = new schema.Entity('list_items', {item}, {
    processStrategy: entity => {
        if (entity.item) {
            return entity;
        }

        return {
            ...entity,
            item: entity.item_id
        };
    }
});

export const list = new schema.Entity('lists', {
    list_items: [listItem]
});
