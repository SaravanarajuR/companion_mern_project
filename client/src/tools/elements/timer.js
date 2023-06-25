import { withStyles } from "@material-ui/styles";
import Styles from "../jss/timerStyles";
import { useState } from "react";

function Timer(props) {
  const [time, setTime] = useState([]);
  function handleSubmit(e) {
    setTime((prev) => [...prev, `${e.target[0].value}:${e.target[1].value}`]);
  }
  function handleTimes() {
    time.map((k) => {
      return (
        <div>
          <p>{new Date(k).getTime() - new Date().getTime()}</p>
        </div>
      );
    });
  }
  const { classes } = props;
  return (
    <div className={classes.parent}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input className={classes.input} type="text" />
        <input className={classes.input} type="text" />
        <button className={classes.button}>Add</button>
      </form>
      <div className="timers">{handleTimes()}</div>
    </div>
  );
}

export default withStyles(Styles)(Timer);
