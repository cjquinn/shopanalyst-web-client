import { instance } from '../api';

export const fetchCurrentUser = () => instance().get('/auth/current-user.json');

export const signIn = data => instance().post('/auth/login.json', data);

export const signUp = data => instance().post('/users.json', data);

export const requestPasswordReset = data => instance().post('/auth/request-password-reset.json', data);

export const resetPassword = (token, data) => instance().patch(`/auth/reset-password.json?token=${token}`, data);

export const updateSettings = data => instance().patch('/users/settings.json', data);

export const validateToken = token => instance().get(`/auth/reset-password.json?token=${token}`);
