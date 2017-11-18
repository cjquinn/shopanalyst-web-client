import { instance } from '../api';

export const addItems = (id, data) => instance().patch(`/lists/${id}/add-items.json`, data);

export const createList = data => instance().post('/lists.json', data);

export const duplicateList = id => instance().post(`/lists/${id}/duplicate.json`);

export const fetchList = id => instance().get(`/lists/${id}.json`);

export const fetchLists = page => instance().get(`/lists.json?page=${page}`);

export const updateList = (id, data) => instance().patch(`/lists/${id}.json`, data);
