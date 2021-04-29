import React, {useState, useEffect, useRef} from 'react';
import uuid from 'react-uuid';
import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';
import PlayDuotone from 'public/icons/phosphor-icons/assets/duotone/play-duotone.svg';
import PauseDuotone from 'public/icons/phosphor-icons/assets/duotone/pause-duotone.svg';
import PlusDuotone from 'public/icons/phosphor-icons/assets/duotone/plus-duotone.svg';
import RepeatDuotone from 'public/icons/phosphor-icons/assets/duotone/repeat-duotone.svg';
import TrashDuotone from 'public/icons/phosphor-icons/assets/duotone/trash-duotone.svg';

import PropTypes from 'prop-types';

export default function TaskSmall({
  task,
  updateTaskTimer,
  createTask,
  removeTask,
  setNewTask,
}) {
  TaskSmall.propTypes = {
    task: PropTypes.object,
    setNewTask: PropTypes.func,
    updateTaskTimer: PropTypes.func,
    removeTask: PropTypes.func,
    createTask: PropTypes.func,
  };

  const [time, setTime] = useState(task.time_spend);
  const [desc, setDesc] = useState(task.description);
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
    var a = sec.split(':');
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
  }, [active, time]);

  return (
    <div
      id={task.task_id}
      style={{maxWidth: '95%'}}
      className="relative mx-auto prose border-2 px-xl w-100 bg-gray-light default-card my-xl"
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
          bottom: '1rem',
          right: '2rem',
        }}
      />
      <div className="rounded-lg ">
        <div className="flex-row flex-wrap items-center place-items-center place-center place-content-center spaced">
          {task.name && <h3 className="m-none">{task.name}</h3>}
          <p
            style={{minWidth: '300px'}}
            className={active ? 'my-none ' : 'my-none  '}
          >
            <span className={active ? ' text-green' : 'm text-red'}>
              {task.time_spend
                ? `Total: ${convToSecs(task.time_spend)}`
                : '00:00:00'}
            </span>
            <br />
            {`Start: ${task.start_date ? convDate(task.start_date) : ''}`}
            <br />
            {`Last change: ${task.end_date ? convDate(task.end_date) : ''}`}
          </p>
          <textarea
            style={{
              maxWidth: '100%',
            }}
            onBlur={e => {
              setNewTask(task);
              updateTaskTimer(time, e.target.value, task.task_id);
            }}
            onChange={e => {
              setDesc(e.target.value);
            }}
            className="text-center rounded-lg bg-secondary-light m-lg"
          >
            {desc}
          </textarea>
        </div>
      </div>
      {task.name && !bookTime && (
        <div className="rounded-lg bg-gray-light pb-lg">
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
          className="rounded-lg bg-gray-light pb-lg"
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
