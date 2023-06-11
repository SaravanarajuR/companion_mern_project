import React, { Component } from "react";
import { withStyles, createStyles } from "@material-ui/styles";

const styles = createStyles({
  input: {
    width: "100px",
    padding: "4px 15px",
    "&:focus": {
      width: "240px",
      transition: "2s",
    },
  },
});
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
