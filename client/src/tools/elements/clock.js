import React, { Component } from "react";
import Switch from "../frontendElements/switch";
import { withStyles } from "@material-ui/styles";
import styles from "../jss/clockStyles";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      hrs: "",
      mins: "",
      secs: "",
      intervalId: "",
      format: 24,
    };
  }
  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({
        hrs:
          this.state.format === 24
            ? new Date().getHours()
            : new Date().getHours() % 12,
        mins: new Date().getMinutes(),
        secs: new Date().getSeconds(),
        session: new Date().getHours() >= 12 ? "PM" : "AM",
      });
    }, 1000);
    this.setState({ intervalId: interval });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  changeFormat = () => {
    this.setState({ format: this.state.format === 24 ? 12 : 24 });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.clock}>
        <Switch id="format" change={this.changeFormat} />
        <div className={classes.clockInner}>
          <p className={classes.clockText}>{this.state.hrs}</p>
          <p className={classes.clockText}>{this.state.mins}</p>
          <p className={classes.clockText}>{this.state.secs}</p>
          {this.state.format === 12 ? (
            <p className={classes.clockText}>{this.state.session}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Clock);
