import useSWR from 'swr';
import {getToken} from './token';

async function get_user_from_mail(values) {
  if (!getToken('accessToken=')) return {error: 'no token'};
  let url = `${process.env.NEXT_PUBLIC_HOST}/api/auth/customers/search/${values.email}`;
  const data = await fetch(url, {
    method: 'GET',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + getToken('accessToken='),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then(data => {
      return data.json();
    })
    .catch(error => {
      return error;
    });

  return data;
}

const get_user_from_token = () =>
  useSWR(
    [`${process.env.NEXT_PUBLIC_HOST}/api/auth/customers/login`],
    url =>
      fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        cache: 'reload',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + getToken('accessToken='),
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      }).then(r => {
        return r.json();
      }),
    {revalidateOnMount: true},
  );

const verify_token = () =>
  useSWR(
    [`${process.env.NEXT_PUBLIC_HOST}/api/auth/verify`],
    url =>
      fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        cache: 'reload',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + getToken('accessToken='),
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      }).then(r => {
        return r.json();
      }),
    {revalidateOnMount: true},
  );

function useJwtVerify() {
  const {data, error} = verify_token();

  if (data && data.error) return false;
  if (data && !data.error) return data;
}

export {useJwtVerify, verify_token, get_user_from_token, get_user_from_mail};
