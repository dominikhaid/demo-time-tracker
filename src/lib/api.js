import useSWR from 'swr';

async function updateTasks(values) {
  let url = `${process.env.NEXT_PUBLIC_HOST}/api/tasks`;

  let ids = values.tasks.map(task => {
    return task.task_id;
  });

  let time = values.tasks.map(task => {
    return task.time_spend;
  });

  let description = values.tasks.map(task => {
    return task.description;
  });

  let name = values.tasks.map(task => {
    return task.name;
  });

  let start = values.tasks.map(task => {
    return task.start_date ? task.start_date : '';
  });

  let end = values.tasks.map(task => {
    return task.end_date ? task.start_date : '';
  });

  let params = new URLSearchParams();
  params.append('id', ids.join(','));
  params.append('time', time.join(','));
  params.append('desc', description.join('&,'));
  params.append('name', name.join('&,'));
  params.append('start', start.join('&,'));
  params.append('end', end.join('&,'));

  const data = await fetch(url, {
    method: 'PATCH',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: params,
  })
    .then(data => {
      return data.json();
    })
    .catch(error => {
      return error;
    });
  return data;
}

async function createTaskApi(values) {
  let url = `${process.env.NEXT_PUBLIC_HOST}/api/tasks`;

  let params = new URLSearchParams();
  params.append('id', values.task_id);
  params.append('desc', values.description);
  params.append('name', values.name);

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
    body: params,
  })
    .then(data => data.json())
    .catch(error => {
      return error;
    });

  data.success && data.success.accessToken && delete data.success.accessToken;
  return data;
}

async function removeTaskApi(values) {
  let url = `${process.env.NEXT_PUBLIC_HOST}/api/tasks`;

  let params = new URLSearchParams();
  params.append('id', values);

  const data = await fetch(url, {
    method: 'DELETE',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: params,
  })
    .then(data => data.json())
    .catch(error => {
      return error;
    });

  data.success && data.success.accessToken && delete data.success.accessToken;
  return data;
}

export {updateTasks, createTaskApi, removeTaskApi};
