import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "../jss/menuStyle";

class Menu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div width="100%" height="100%">
        <div
          onClick={this.props.handleVisibility}
          id="menu"
          className={classes.menu}
        >
          <div id="menu" className={classes.close}>
            <i
              id="menu"
              onClick={this.props.handleMenu}
              class="fa-solid fa-circle-xmark"
            ></i>
          </div>
          <i
            onClick={this.props.handleVisibility}
            id="clock"
            class="fa-solid fa-clock"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="timer"
            className="fa-solid fa-stopwatch-20"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="todo"
            className="fa-solid fa-clipboard-list"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="calc"
            class="fa-solid fa-calculator"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="notes"
            class="fa-solid fa-note-sticky"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="utube"
            class="fa-brands fa-youtube"
          ></i>
          <i
            onClick={this.props.handleVisibility}
            id="music"
            class="fa-solid fa-music"
          ></i>
          <i
            class="fa-solid fa-up-right-and-down-left-from-center"
            onClick={this.props.fs}
          ></i>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
