import { instance } from '../api';

export const fetchLists = () => instance().get('/lists.json');
