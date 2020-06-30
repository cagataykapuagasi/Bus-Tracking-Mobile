import { create } from 'apisauce';

let token = null;

const client = create({
  baseURL: 'https://bus-track.herokuapp.com/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export function setToken(newToken) {
  token = newToken;
}

/**
 * Sends HTTP request
 */
export function request(method, path, params = {}, customHeaders = {}) {
  const headers = token ? { Authorization: `Bearer ${token}` } : null;

  return client[method](path, params, {
    headers: {
      ...headers,
      ...customHeaders,
    },
  }).then(response => {
    if (response.ok) {
      return Promise.resolve(response.data);
    } else {
      const { message, title, ...others } = response.data;

      return Promise.reject({
        error: message,
        errors: [],
        ...others,
        status: response.status,
      });
    }
  });
}
