import React, {useState, useEffect, useRef} from 'react';
import uuid from 'react-uuid';
import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';
import PlayDuotone from 'public/icons/phosphor-icons/assets/duotone/play-duotone.svg';
import PauseDuotone from 'public/icons/phosphor-icons/assets/duotone/pause-duotone.svg';
import PlusDuotone from 'public/icons/phosphor-icons/assets/duotone/plus-duotone.svg';
import RepeatDuotone from 'public/icons/phosphor-icons/assets/duotone/repeat-duotone.svg';
import TrashDuotone from 'public/icons/phosphor-icons/assets/duotone/trash-duotone.svg';

import PropTypes from 'prop-types';

export default function Task({
  task,
  updateTaskTimer,
  createTask,
  removeTask,
  setNewTask,
}) {
  Task.propTypes = {
    task: PropTypes.object,
    setNewTask: PropTypes.func,
    updateTaskTimer: PropTypes.func,
    removeTask: PropTypes.func,
    createTask: PropTypes.func,
  };

  const [time, setTime] = useState(task.time_spend);
  const [desc, setDesc] = useState(task.description);
  const [name, setName] = useState(task.name);
  const [bookTime, setBookTime] = useState(false);
  const [bookTimeVal, setBookTimeVal] = useState(false);
  const [active, setActive] = useState(false);
  let intervalId = useRef(null);

  const addTime = () => {
    setTime(time + 1);
    setNewTask(task);
    updateTaskTimer(time, desc, task.task_id);
  };

  const addTimerInterval = () => {
    intervalId.current = setInterval(() => {
      addTime();
    }, 1000);
  };

  const convToSecs = sec => {
    return new Date(sec * 1000).toISOString().substr(11, 8);
  };

  const convFromSecs = sec => {
    var a = sec.split ? sec.split(':') : 0;
    var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds;
  };

  const convDate = date => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    if (!date || date === '') return '';
    return new Date(date).toLocaleDateString('de-DE', options);
  };

  useEffect(() => {
    if (active) addTimerInterval();
    if (!active) clearInterval(intervalId.current);
    return () => {
      clearInterval(intervalId.current);
    };
  }, [active, time, task]);

  return (
    <div
      id={task.task_id}
      className="relative prose border-2 mx-xl bg-gray-light default-card my-xl pt-2xl"
      style={{
        maxWidth: '500px',
        minWidth: '350x',
        flex: '1 1 350px',
      }}
    >
      <DefaultButton
        disabled={active}
        className="p-lg"
        onClick={() => {
          removeTask(task.task_id);
        }}
        icon={
          <TrashDuotone
            style={{widht: '35px', height: '35px', padding: '5px'}}
            className="border-2 rounded-full text-red"
          />
        }
        style={{
          padding: '2px',
          width: '25px',
          height: '25px',
          position: 'absolute',
          top: '1rem',
          right: '2rem',
        }}
      />
      <div className="rounded-lg p-lg mb-lg">
        <div className="items-center place-items-center place-center place-content-center spaced">
          {!task.name && (
            <input
              style={{
                maxWidth: '100%',
              }}
              type="text"
              placeholder="new task"
              value={name ? name : ''}
              onBlur={e => {
                task.name = name;
                task.description = desc;
                createTask(task);
              }}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          )}
          {task.name && <h3 className="m-none">{task.name}</h3>}

          <p className="my-none">
            {task.time_spend
              ? `Total: ${convToSecs(task.time_spend)}`
              : '00:00:00'}
          </p>
        </div>

        <div className="text-center">
          <p className="my-none w-100">{`Start : ${
            task.start_date ? convDate(task.start_date) : ''
          }`}</p>
          <p className="my-none w-100">{`End : ${
            task.end_date ? convDate(task.end_date) : ''
          }`}</p>
        </div>

        <div className="items-center place-items-center place-center place-content-center spaced">
          <textarea
            style={{
              maxWidth: '100%',
              minHeight: '100px',
            }}
            onBlur={e => {
              setNewTask(task);
              updateTaskTimer(time, e.target.value, task.task_id);
            }}
            onChange={e => {
              setDesc(e.target.value);
            }}
            className="text-center rounded-lg bg-secondary-light my-xl"
          >
            {desc}
          </textarea>
        </div>
      </div>
      {task.name && !bookTime && (
        <div className="rounded-lg bg-gray-light p-lg">
          <div className="items-center place-items-center place-center place-content-center spaced">
            <h4 className="m-none">Tracker:</h4>
            <p className={active ? 'my-none text-green' : 'my-none  text-red'}>
              {time ? convToSecs(time) : ''}
            </p>
          </div>
          <div className="items-center place-items-center place-center place-content-center spaced">
            <DefaultButton
              disabled={active}
              icon={
                <PlayDuotone
                  className={active ? 'small text-gray' : 'small text-green'}
                />
              }
              onClick={() => {
                setActive(true);
                addTimerInterval();
              }}
              style={{padding: '2px', width: '25px', height: '25px'}}
            />
            <DefaultButton
              disabled={!active}
              icon={
                <PauseDuotone
                  className={
                    !active ? 'small text-gray-dark' : 'small text-red'
                  }
                />
              }
              onClick={() => {
                setActive(false);
              }}
              style={{padding: '2px', width: '25px', height: '25px'}}
            />
            <DefaultButton
              disabled={active}
              onClick={() => {
                setBookTime(true);
              }}
              icon={<PlusDuotone className="small text-gray-dark" />}
              style={{padding: '2px', width: '25px', height: '25px'}}
            />
            <DefaultButton
              disabled={active}
              onClick={() => {
                setActive(false);
                setTime(0);
                updateTaskTimer(
                  0,
                  desc ? desc : task.description ? task.description : '',
                  task.task_id,
                );
              }}
              icon={<RepeatDuotone className="small text-gray-darkgreen" />}
              style={{padding: '2px', width: '25px', height: '25px'}}
            />
          </div>
        </div>
      )}
      {bookTime && (
        <div
          style={{maxWidth: '300px'}}
          className="rounded-lg bg-gray-light p-lg"
        >
          <div className="items-center place-items-center place-center place-content-center spaced">
            <input
              placeholder="time to add"
              type="time"
              min="00:00"
              step="2"
              value={bookTimeVal ? bookTimeVal : ''}
              onChange={e => {
                setBookTimeVal(e.target.value);
              }}
            />
            <DefaultButton
              onClick={() => {
                setBookTime(false);
                setTime(time + convFromSecs(bookTimeVal));
                updateTaskTimer(
                  time + convFromSecs(bookTimeVal),
                  desc,
                  task.task_id,
                );
              }}
              type="primary"
              title="add"
            />
          </div>
        </div>
      )}
    </div>
  );
}
