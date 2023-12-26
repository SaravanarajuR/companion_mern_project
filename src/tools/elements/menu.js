import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "../jss/menuStyle";
import data from "../../data";

class Menu extends Component {
  handleMenuItems = () => {
    const { classes } = this.props;
    return Object.keys(data).map((k) => {
      return (
        <div
          className={classes.items}
          onClick={this.props.handleVisibility}
          id={k}
        >
          <i id={k} className={data[k]}></i>
        </div>
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div width="100%" height="100%">
        <div className={classes.menu}>
          <div
            onClick={this.props.handleVisibility}
            id="menu"
            className={classes.close}
          >
            <i id="menu" className="fa-solid fa-circle-xmark"></i>
          </div>
          {this.handleMenuItems()}
          <i
            className="fa-solid fa-up-right-and-down-left-from-center"
            onClick={this.props.fs}
          ></i>
          <i className="fa-solid fa-paint-roller"></i>
          <i
            id="mech"
            onClick={this.props.handleVisibility}
            className="fa-solid fa-keyboard"
          ></i>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
