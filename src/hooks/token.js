function logout(callBack) {
  if (!process.browser) return null;
  removeToken('accessToken');

  setTimeout(() => {
    callBack({user: {}});
  }, 100);
}

function setToken(params) {
  if (!document || !params) return null;
  if (process.env.NEXT_PUBLIC_HOST !== 'http://localhost')
    document.cookie = `accessToken=${params};path=/;secure=true;samesite=strict;max-age=86400`;
  if (process.env.NEXT_PUBLIC_HOST === 'http://localhost')
    document.cookie = `accessToken=${params};path=/;samesite=strict;max-age=86400`;
}

function getToken(params) {
  if (!document || !params) return null;

  if (document.cookie.split(';').find(item => item.trim().startsWith(params)))
    return document.cookie
      .split(';')
      .find(item => item.trim().startsWith(params))
      .replace(params, '');
  return null;
}

function removeToken(params) {
  if (!document || !params) return null;

  if (document.cookie.split(';').find(item => item.trim().startsWith(params)))
    document.cookie = `${params}=;path=/;samesite=strict;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  return true;
}

export {logout, removeToken, getToken, setToken};
