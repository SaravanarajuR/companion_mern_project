import { useState } from "react";
import Styles from "../jss/todoStyles";
import { withStyles } from "@material-ui/styles";
import Switch from "../frontendElements/switch";

function Todo(props) {
  const [tasks, setTask] = useState({});
  const [task, setNewtask] = useState({});
  function handleAdd(e) {
    e.preventDefault();
    setTask((prev) => {
      return { ...prev, [Object.keys(prev).length]: task };
    });
  }

  function handleTasks() {
    return Object.keys(tasks).map((k) => {
      return (
        <div>
          <p>{tasks[k]["task"]}</p>
          <i className="fa-solid fa-check"></i>
          <i className="fa-solid fa-trash"></i>
        </div>
      );
    });
  }

  function handleChange(e) {
    setNewtask((prev) => {
      return { ...task, [e.target.id]: e.target.value };
    });
  }
  const { classes } = props;
  return (
    <form className={classes.parent} onSubmit={handleAdd}>
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
    </form>
  );
}

export default withStyles(Styles)(Todo);
