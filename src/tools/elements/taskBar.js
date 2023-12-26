import { withStyles } from "@material-ui/styles";
import styles from "../jss/taskbarStyles";
import data from "../../data";
import { v4 } from "uuid";

function Taskbar(props) {
  const { classes } = props;

  function handleRender() {
    return Object.keys(data).map((k) => {
      if (props.state[`${k}`][0] === true) {
        return (
          <div
            className={classes.task}
            key={v4()}
            id={k}
            onClick={props.minimise}
          >
            <i id={k} className={data[`${k}`]} />
          </div>
        );
      } else {
        return null;
      }
    });
  }
  return (
    <div onClick={props.closeBar} className={classes.taskbar}>
      <span
        className={`${classes.close}
          fa-solid fa-angles-down`}
      ></span>
      <div className={classes.tasks}>{handleRender()}</div>
    </div>
  );
}

export default withStyles(styles)(Taskbar);
