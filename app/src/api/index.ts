const BASE_API = import.meta.env.VITE_BASE_API.replace(/\/*$/, '');

const ERROR_CODES = [400, 401, 404, 403, 500];

const postData = async (path = '', data = {}) => {
  const FETCH_API = `${BASE_API}/${path}`;
  const response = await fetch(FETCH_API, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json();
};
const getData = async (path = '', headers = {}) => {
  const FETCH_API = `${BASE_API}/${path}`;
  const response = await fetch(FETCH_API, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  return response.json();
};

const PostOrPut = async (
  route = '',
  method = 'POST',
  body = {},
  headers = {},
  params = {}
) => {
  const response = await fetch(`${BASE_API}/${route}`, {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method,
    body: JSON.stringify(body),
  });

  return response.json();
};

const GetOrDelete = async (
  route = '',
  method = 'GET',
  headers = {},
  params = {}
) => {
  const paramString = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_API}/${route}?${paramString}`, {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method,
  });
  return response.json();
};

export { postData, getData, PostOrPut, GetOrDelete, ERROR_CODES, BASE_API };
