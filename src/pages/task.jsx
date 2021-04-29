import React from 'react';
import Task from 'components/Elements/Tasks/Task';
import DefaultH1 from 'components/Elements/Titles/DefaultH1';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SingelTask({task, updateTaskTimer}) {
  SingelTask.propTypes = {
    task: PropTypes.object,
    updateTaskTimer: PropTypes.func,
  };

  if (!task) return <p>No Tasks to display!</p>;

  return (
    <>
      <Head>
        <title>Simple Task List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Simple Task List" key="title" />
      </Head>
      <section className="px-none">
        <div className="relative grid border-b-2 feature-next mt-none sm:py-none sm:px-none md:py-6xl md:px-2xl lg:py-6xl lg:px-2xl xl:py-6xl xl:px-2xl place-content-center">
          <DefaultH1
            className="text-center gird-none lg:pl-4xl xl:pl-4xl xl:text-6xl lg:text-6xl"
            title={'Task'}
          />
        </div>
        <div className="relative grid dev-box sm:px-none md:px-2xllg:px-2xl xl:px-2xl place-content-center">
          <div id="task-single" className="flex flex-wrap justify-center">
            <Task key={task.id} task={task} updateTaskTimer={updateTaskTimer} />
            ;
          </div>
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
    data.success.timer = {
      active: false,
      time: 0,
    };

  if (data.success)
    data.success.forEach(task => {
      if (!task.time_spend) task.time_spend = 0;
    });

  return {
    props: {
      tasks: data.success ? data.success : false,
    },
  };
}
