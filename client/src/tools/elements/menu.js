import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "../jss/menuStyle";

class Menu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div width="100%" height="100%">
        <div className={classes.menu}>
          <div id="menu" className={classes.close}>
            <i
              id="menu"
              onClick={this.props.handleVisibility}
              className="fa-solid fa-circle-xmark"
            ></i>
          </div>
          <i
            onClick={this.props.handleVisibility}
            id="clock"
            className="fa-solid fa-clock"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="stopwatch"
            className="fa-solid fa-stopwatch-20"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="timer"
            className="fa-solid fa-bell"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="todo"
            className="fa-solid fa-clipboard-list"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="calc"
            className="fa-solid fa-calculator"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="notes"
            className="fa-solid fa-note-sticky"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="utube"
            className="fa-brands fa-youtube"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="music"
            className="fa-solid fa-music"
          ></i>
          <i
            className="fa-solid fa-up-right-and-down-left-from-center"
            onClick={this.props.fs}
          ></i>
          <i className="fa-solid fa-paint-roller"></i>
          <i
            id="code"
            onClick={this.props.handleVisibility}
            className="fa-solid fa-laptop-code"
          ></i>
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
