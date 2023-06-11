import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../tools/jss/todo";

class Todo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <input className={classes.input} />
      </div>
    );
  }
}

export default withStyles(styles)(Todo);
