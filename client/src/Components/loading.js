import React, { Component } from "react";
import { withStyles, createStyles } from "@material-ui/styles";

const styles = createStyles({
  loader: {
    width: "240px",
    height: "10px",
    borderRadius: "3px",
    display: "flex",
    justifyContent: "center",
  },
  loading: {
    height: "100%",
    width: "4%",
    borderRadius: "3px",
    backgroundColor: "rgba(255,255,255,0.7)",
    animation: "$load ease-out 1s infinite",
    animationTimingFunction: "linear",
  },
  parent: {
    backgroundColor: "#6612b0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "@keyframes load": {
    "10%": {
      transform: "scaleX(2)",
      borderRadius: "3px",
    },
    "20%": {
      transform: "scaleX(4)",
      borderRadius: "3px",
    },
    "30%": {
      transform: "scaleX(8)",
      borderRadius: "3px",
    },
    "40%": {
      transform: "scaleX(16)",
      borderRadius: "3px",
    },
    "50%": {
      transform: "scaleX(24)",
      borderRadius: "3px",
    },
  },
});
class Loading extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.parent}>
        <div className={classes.loader}>
          <div className={classes.loading}></div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Loading);
