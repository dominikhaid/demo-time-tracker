import {getToken} from './token';

async function loginUserPlain(values) {
  let url = `${process.env.NEXT_PUBLIC_HOST}/api/customers/login`;
  const data = await fetch(url, {
    method: 'POST',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: new URLSearchParams(values),
  })
    .then(data => data)
    .catch(error => {
      return error;
    });

  return data;
}

async function updateUser(values) {
  let url = `${process.env.NEXT_PUBLIC_HOST}/api/auth/customers/${values.email}`;
  const data = await fetch(url, {
    method: 'PATCH',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + getToken('accessToken='),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: new URLSearchParams(values),
  })
    .then(data => {
      return data;
    })
    .catch(error => {
      return error;
    });
  return data;
}

async function createUser(newUser) {
  let url = `${process.env.NEXT_PUBLIC_HOST}/api/customers/${newUser.email}`;

  const data = await fetch(url, {
    method: 'POST',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: new URLSearchParams(newUser),
  })
    .then(data => {
      return data;
    })
    .catch(error => {
      return error;
    });

  return data;
}

export {loginUserPlain, updateUser, createUser};
