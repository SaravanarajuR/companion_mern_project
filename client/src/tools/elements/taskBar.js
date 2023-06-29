import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "../jss/taskbarStyles";
import data from "../../data";
import { v4 } from "uuid";

class Taskbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleRender = () => {
    const { classes } = this.props;
    return Object.keys(data).map((k) => {
      if (this.props.state[`${k}`][1] === false) {
        return (
          <div
            className={classes.task}
            key={v4()}
            id={k}
            onClick={this.props.minimise}
          >
            <i id={k} className={data[`${k}`]} />
          </div>
        );
      } else {
        return null;
      }
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div onClick={this.props.closeBar} className={classes.taskbar}>
        <span className={`fa-solid fa-angles-down ${classes.close}`}></span>
        <div className={classes.tasks}>{this.handleRender()}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Taskbar);
