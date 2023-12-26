import { useState } from "react";
import Styles from "../jss/todoStyles";
import { withStyles } from "@material-ui/styles";

function Todo(props) {
  const [tasks, setTask] = useState({});
  const [task, setNewtask] = useState({});
  function handleAdd(e) {
    e.preventDefault();
    setTask((prev) => {
      return { ...prev, [Object.keys(prev).length]: { ...task, done: false } };
    });
  }

  function handleTasks() {
    const ele = Object.keys(tasks).map((k) => {
      return (
        <div>
          <p className={`${tasks[k]["done"] ? "strike" : ""}`}>
            {tasks[k].task}
          </p>
          <i id={k} onClick={handleDone} className="fa-solid fa-check"></i>
          <i id={k} onClick={handleDelete} className="fa-solid fa-trash"></i>
        </div>
      );
    });
    return ele;
  }

  function handleChange(e) {
    setNewtask({ ...task, [e.target.id]: e.target.value });
  }

  function handleDone(e) {
    const updatedTasks = tasks;
    updatedTasks[e.target.id]["done"] = true;
    setTask(updatedTasks);
  }

  function handleDelete(e) {
    const updatedTasks = tasks;
    updatedTasks.delete(e.target.id);
    setTask(updatedTasks);
  }

  const { classes } = props;
  return (
    <form className={classes.parent} onSubmit={handleAdd}>
      <i
        id="todo"
        onClick={props.minimise}
        className={`fa-solid fa-square-minus ${classes.mini}`}
      ></i>
      <div className={classes.inp}>
        <input
          id="task"
          onChange={handleChange}
          placeholder="task"
          className={classes.taskInp}
        />
        <div className={classes.time}>
          <input
            id="hrs"
            onChange={handleChange}
            className={classes.timeInp}
            type="number"
            min="1"
            max="12"
          />
          <input
            id="mins"
            onChange={handleChange}
            className={classes.timeInp}
            type="number"
            min="1"
            max="59"
          />
          <select className={classes.timeInp}>
            <option></option>
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>
      </div>
      <button className={classes.btn}>Add task</button>
      <div className={classes.tasks}>{handleTasks()}</div>
      <i className={`fa-solid fa-maximize ${classes.expand}`}></i>
    </form>
  );
}

export default withStyles(Styles)(Todo);
