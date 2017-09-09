import { instance } from '../api';

export const createUser = data => instance().post('/users.json', data);
