import Config from 'react-native-config';

const apiUrl = Config.API_URL;

export const fetchGet = async route => {
  let response = null;
  response = await fetch(apiUrl + route, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const resJson = await response.json();

  return resJson;
};

export const fetchPost = async (route, data) => {
  let response = null;
  response = await fetch(apiUrl + route, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resJson = await response.json();

  return resJson;
};
