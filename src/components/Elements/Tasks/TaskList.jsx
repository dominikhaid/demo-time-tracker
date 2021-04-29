import React, {useState, useEffect} from 'react';
import Task from 'components/Elements/Tasks/Task';
import TaskSmall from 'components/Elements/Tasks/TaskSmall';
import DefaultH1 from 'components/Elements/Titles/DefaultH1';
import DefaultProductFilter from 'components/Elements/Filters/DefaultProductFilter';
import DefaultPaginationList from 'components/Elements/Pagination/DefaultPaginationList';
import DefaultSortFilter from 'components/Elements/Filters/DefaultSortFilter';
import uuid from 'react-uuid';
import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';
import PropTypes from 'prop-types';

export default function TaskList({
  tasks,
  task,
  updateTaskTimer,
  removeTask,
  createTask,
}) {
  TaskList.propTypes = {
    tasks: PropTypes.object,
    task: PropTypes.object,
    updateTaskTimer: PropTypes.func,
    createTask: PropTypes.func,
    removeTask: PropTypes.func,
  };

  const [active, setActive] = useState(false);
  const [newTask, setNewTask] = useState(task);
  const [filterList, setFilterList] = useState(tasks);
  const [pagination, setPagination] = useState(0);
  const [forceRender, setForceRender] = useState(false);

  const pageSize = 5;

  const generateGroupes = (update = false, remove = false, reset = false) => {
    let count = 1;
    let grp = [[]];
    let list = filterList;
    let newTask = task;
    delete newTask.update;

    if (!remove && !list.find(e => e.task_id === task.task_id)) {
      list.push(newTask);
    }

    if (!remove && list.find(e => e.task_id === task.task_id)) {
      list.find(e => e.task_id === task.task_id);
      setFilterList(filterList.filter(e => e.task_id !== task.delete));
    }

    if (remove && list.find(e => e.task_id === task.task_id)) {
      list = list.filter(e => e.task_id !== task.delete);
      setFilterList(filterList.filter(e => e.task_id !== task.delete));
    }

    list.forEach(item => {
      if (count <= pageSize) {
        grp[grp.length - 1].push(item);
      }
      if (count > pageSize) {
        grp.push([item]);
      }
      if (count > pageSize) count = 1;
      if (count <= pageSize) count++;
    });

    return grp;
  };

  const [groups, setGroups] = useState();

  if (
    groups &&
    filterList[0] &&
    groups[0][0].task_id !== filterList[0].task_id
  ) {
    setGroups(generateGroupes({reset: true}));
  }

  if (
    groups &&
    groups.length > 0 &&
    filterList.length !== groups.flat().length
  ) {
    setGroups(generateGroupes({reset: true}));
  }

  useEffect(() => {
    if (!groups) setGroups(generateGroupes());
    if (task.update) {
      delete task.update;
      setNewTask(task);
      setGroups(generateGroupes({update: true}));
    }

    if (task.delete) {
      setGroups(generateGroupes({remove: true}));
      delete task.delete;
      setNewTask(task);
    }

    return () => {};
  }, [newTask, pagination, task, tasks]);

  if (tasks.length < 1 || !groups || !groups[pagination])
    return <p>No Tasks to display!</p>;

  return (
    <>
      {newTask && (
        <>
          <DefaultH1
            className="text-center gird-none pl-lg m-lg xl:text-4xl lg:text-4xl"
            title={'Last Edited Task'}
          />
          <div
            style={{maxWidth: 'max-content'}}
            className="flex flex-wrap justify-center mx-auto bg-secondary-light"
          >
            <Task
              key={newTask.task_id}
              task={newTask}
              removeTask={removeTask}
              setNewTask={setNewTask}
              updateTaskTimer={updateTaskTimer}
              createTask={createTask}
            />
          </div>
        </>
      )}
      <DefaultH1
        className="text-center gird-none lg:pl-4xl xl:pl-4xl xl:text-4xl lg:text-4xl"
        title={'All Tasks'}
      />
      <div id="task-list" style={{maxWidth: '100%'}} className="w-100">
        <DefaultButton
          onClick={() => {
            setActive(true);
            setNewTask({
              task_id: uuid(),
              description: '',
              start_date: '',
              end_date: '',
              time_spend: 0,
              name: false,
            });
          }}
          className="text-white border-2 shadow-md rounded-2xl bg-primary"
          style={{
            position: 'fixed',
            top: '5vw',
            right: '2rem',
            zIndex: '99',
          }}
          title="new task"
          type="icon"
        />
        <div
          id="tasks-tools"
          style={{maxWidth: 'max-content'}}
          className="relative ml-4xl pb-2xl spaced"
        >
          <DefaultProductFilter products={tasks} setDatalist={setFilterList} />
          <DefaultSortFilter
            id="task-tools-sort"
            forceRender={forceRender}
            setForceRender={setForceRender}
            products={filterList}
            setDatalist={setFilterList}
          />
        </div>
        <div>
          <DefaultPaginationList
            pageSize={pageSize}
            activePage={pagination}
            setActivePage={setPagination}
            items={filterList}
          />
        </div>
        {groups[pagination].map((task, index) => {
          return (
            <TaskSmall
              key={task.task_id}
              task={task}
              removeTask={removeTask}
              setNewTask={setNewTask}
              updateTaskTimer={updateTaskTimer}
              createTask={createTask}
            />
          );
        })}
      </div>
    </>
  );
}
