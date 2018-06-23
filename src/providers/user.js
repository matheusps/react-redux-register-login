import config from 'config';
import { authHeader } from '../helpers';

export const userProvider = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

/**
 * User Login with username and pass
 * @param {*} username 
 * @param {*} password 
 */
const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

/**
 * Remove from localstorage
 */
const logout = () => {
    localStorage.removeItem('user');
}

/**
 * Get all users
 */
const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

/**
 * Get an user by a given id
 * @param {*} id 
 */
const getById = id => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

/**
 * Registration of a new user
 * @param {*} user 
 */
const register = user => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

/**
 * User PUT 
 * @param {*} user 
 */
const update = user => {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}


/**
 * User deletion
 * @param {*} id 
 */
const _delete = id => {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

/**
 * Handle status 401 returned from API
 * @param {*} response 
 */
const handleResponse = response => {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}