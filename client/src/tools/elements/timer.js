import { withStyles } from "@material-ui/styles";
import Styles from "../jss/timerStyles";
import { useState, useEffect } from "react";

function Timer(props) {
  const [time, setTime] = useState({});
  const [currentTime, setCurrentTime] = useState();
  const [intervalId, setIntervalId] = useState();
  const { classes } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);
    setIntervalId(interval);
    return clearInterval(intervalId);
  }, []);

  function handleReset(e) {
    const newTimer = time;
    const timeArr = time[`${e.target.id}`][`userInput`]
      .replace(/[a-zA-Z ]/g, "")
      .split(":");
    const timer =
      (Number(timeArr[0]) * 60 * 60 + Number(timeArr[1]) * 60) * 1000;
    const current = new Date().getTime();
    newTimer[`${e.target.id}`][`time`] = current + timer + 1000;
    setTime(newTimer);
  }

  function handleTimes() {
    return Object.keys(time).map((k, ind) => {
      return Math.floor(time[k][`time`] - currentTime) <= 0 ? (
        <div className={classes.timerTop} style={{ color: "white" }}>
          <p>{time[k][`userInput`]}</p>
          <p className={classes.timerCurrent}>Times Up</p>
          <p
            onClick={handleReset}
            id={k}
            className="fa-solid fa-arrows-rotate"
          ></p>
        </div>
      ) : (
        <div className={classes.timerTop}>
          <p>{time[k][`userInput`]}</p>
          <div className={classes.timerCurrent}>
            <p className={classes.timerCurrentText}>
              {Math.floor((time[k][`time`] - currentTime) / 60000)}
            </p>
            <p className={classes.timerCurrentText}>
              {Math.floor(((time[k][`time`] - currentTime) / 1000) % 60)}
            </p>
          </div>
          <p
            onClick={handleReset}
            id={k}
            className="fa-solid fa-arrows-rotate"
          ></p>
        </div>
      );
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const timer = (e.target[0].value * 60 * 60 + e.target[1].value * 60) * 1000;
    const current = new Date().getTime();
    setTime({
      ...time,
      [`${Object.keys(time).length}`]: {
        time: current + timer,
        userInput: `${e.target[0].value} Hours : ${e.target[1].value} Minutes`,
      },
    });
    document.getElementById("timerForm").reset();
  }

  return (
    <div className={classes.parent}>
      <form id="timerForm" className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.timerInp}>
          <div className={classes.numInp}>
            <input className={classes.input} type="number" required />
            <input className={classes.input} type="number" required />
          </div>
        </div>
        <button className={classes.button}>Add</button>
      </form>
      <div className={classes.timers}>{handleTimes()}</div>
    </div>
  );
}

export default withStyles(Styles)(Timer);
