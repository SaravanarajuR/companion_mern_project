import { withStyles } from "@material-ui/styles";
import { Component } from "react";
import Styles from "../jss/timerClockStyles";

class ClockTimer extends Component {
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
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(Styles)(ClockTimer);
