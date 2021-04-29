import React, {Component} from 'react';
import {updateTasks, createTaskApi, removeTaskApi} from 'lib/api';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

/**
 * @desc Main App Context
 */
class AppProvider extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  state = {
    tasks: [],
    task: {},
    updateTaskTimer: (time, desc, id) => {
      if (!id) return false;

      let updatedTask = this.state.tasks.filter(e => {
        if (e.task_id === id) {
          if (time || time === 0) e.time_spend = time;
          if (!time) e.time_spend = e.time_spend;
          if (desc && desc !== '') e.description = desc;
          if (!e.start_date) e.start_date = new Date().toString();
          e.end_date = new Date().toString();
          return true;
        }
        return false;
      });

      let updatedTasks = this.state.tasks.filter(e => {
        if (e.task_id === id) {
          if (time || time === 0) e.time_spend = time;
          if (!time) e.time_spend = e.time_spend;
          if (desc && desc !== '') e.description = desc;
          if (!e.start_date) e.start_date = new Date().toString();
          e.end_date = new Date().toString();
        }
        return true;
      });

      let updatedTasksChanged = updatedTasks.filter(e => {
        if (
          (e.task_id === id && e.time !== time) ||
          (e.task_id === id && e.desc !== desc)
        ) {
          return true;
        }
        return false;
      });

      updateTasks({tasks: updatedTasksChanged});
      updatedTask[0].update = true;
      this.setState({tasks: updatedTasks, task: updatedTask[0]});
    },
    createTask: task => {
      createTaskApi(task);
      task.update = true;
      this.setState({
        tasks: [...this.state.tasks, task],
        task: task,
      });
    },
    removeTask: id => {
      let updatedTasks = this.state.tasks.filter(e => {
        if (e.task_id === id) {
          return false;
        }
        return true;
      });
      removeTaskApi(id);
      let newTask =
        id === this.state.task.task_id
          ? this.state.tasks.find(e => e.task_id !== id)
          : this.state.task;
      newTask.delete = id;

      this.setState({
        tasks: updatedTasks,
        task: newTask,
      });
    },
    updateState: state => {
      this.setState(state);
    },
  };

  render() {
    const {children} = this.props;
    {
      return (
        <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
      );
    }
  }
}

export {AppContext, AppProvider};
