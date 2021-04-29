import React from 'react';
import TaskList from 'components/Elements/Tasks/TaskList';
import PropTypes from 'prop-types';
import Head from 'next/head';

/**
 * @desc index page
 * @returns react component
 */
export default function Index({
  tasks,
  task,
  updateTaskTimer,
  createTask,
  removeTask,
}) {
  Index.propTypes = {
    tasks: PropTypes.object,
    task: PropTypes.object,
    updateTaskTimer: PropTypes.func,
    createTask: PropTypes.func,
    removeTask: PropTypes.func,
  };

  return (
    <>
      <style global jsx>{``}</style>
      <Head>
        <title>Simple Task List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Simple Task List" key="title" />
      </Head>
      <section className="px-none">
        <div>
          <TaskList
            className="bg-white"
            title={'Dominik Haid | Developer'}
            tasks={tasks}
            task={task}
            removeTask={removeTask}
            createTask={createTask}
            updateTaskTimer={updateTaskTimer}
          />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/tasks`;

  const response = await fetch(url, {
    method: 'GET',
    mode: 'same-origin',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });

  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = [];
  }

  if (data.success)
    data.success.forEach(task => {
      if (!task.time_spend || task.time_spend === '') task.time_spend = 0;
    });

  return {
    props: {
      tasks: data.success ? data.success : false,
    },
  };
}
