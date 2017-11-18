import { instance } from '../api';

export const fetchCurrentUser = () => instance().get('/auth/current-user.json');

export const signIn = data => instance().post('/auth/login.json', data);

export const signUp = data => instance().post('/users.json', data);

export const updateSettings = data => instance().patch('/users/settings.json', data);
