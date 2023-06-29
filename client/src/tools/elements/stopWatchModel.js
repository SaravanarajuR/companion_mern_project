import React, { Component } from "react";
import Styles from "../jss/stopWatchModelStyles";
import { withStyles } from "@material-ui/styles";

class StopWatchModel extends Component {
  checkLaps = () => {
    return this.props.time.lap.map((k) => {
      return <option>{k}</option>;
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.parent}>
        <i
          id="stopwatch"
          onClick={this.props.minimise}
          className={`fa-solid fa-square-minus ${classes.mini}`}
        ></i>
        <div className={classes.timer}>
          <div className={classes.timerInner}>
            <div className={classes.timeSet}>
              <div className={classes.hours}></div>
              {this.props.time.hrs}
            </div>
            <div className={classes.timeSet}>
              <div className={classes.minutes}></div>
              {this.props.time.min}
            </div>
            <div className={classes.timeSet}>
              <div className={classes.seconds}></div>
              {Math.floor(this.props.time.s)}
            </div>
            <div className={classes.buttons}>
              <button onClick={this.props.stop} className={classes.button}>
                Stop
              </button>
              <button onClick={this.props.resume} className={classes.button}>
                Resume
              </button>
            </div>
            <div className={classes.buttons}>
              <button onClick={this.props.addLap} className={classes.button}>
                Lap
              </button>
              <button onClick={this.props.reset} className={classes.button}>
                Reset
              </button>
            </div>
            <center>
              <select className={classes.select}>
                <option value="" default />
                {this.checkLaps()}
              </select>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(Styles)(StopWatchModel);
