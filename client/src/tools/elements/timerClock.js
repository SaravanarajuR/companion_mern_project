import { withStyles } from "@material-ui/styles";
import { Component } from "react";
import Styles from "../jss/timerClockStyles";

class ClockTimer extends Component {
  checkLaps = () => {
    return this.props.time.lap.map((k) => {
      return <option>{k}</option>;
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.parent}>
        <div className={classes.timer}>
          <div className={classes.timerInner}>
            <div className={classes.hours}>
              <p className={classes.text}>{this.props.time.hrs}</p>
            </div>
            <div className={classes.minutes}>
              <p className={classes.text}>{this.props.time.min}</p>
            </div>
            <div className={classes.seconds}>
              <p className={classes.text}>{Math.floor(this.props.time.s)}</p>
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

export default withStyles(Styles)(ClockTimer);
