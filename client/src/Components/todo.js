import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../tools/jss/todo";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      time: [],
    };
  }
  addListener = (e) => {
    e.preventDefault();
    const task = document.getElementById("task").value;
    const time = document.getElementById("time").value;
    this.setState({
      tasks: [...this.state.tasks, task],
      time: [...this.state.time, time],
    });
  };
  componentDidMount() {
    document.addEventListener("submit", this.addListener);
  }
  componentWillUnmount() {
    document.removeEventListener("submit", this.addListener);
  }
  handleTasks = () => {
    return this.state.tasks.map((k, ind) => {
      return (
        <div className={this.props.classes.task}>
          <p className={this.props.classes.font}>{k}</p>
          <div className={this.props.classes.dis}>
            <i className="fa-solid fa-clock"></i>
            {this.state.time[ind]}
          </div>
        </div>
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.parent}>
        <form className={classes.form}>
          <input className={classes.input} id="task" required />
          <input
            className={classes.input}
            id="time"
            type="time"
            required
          ></input>
          <button className={classes.button}>Add</button>
        </form>
        <hr />
        <div className={classes.list}>{this.handleTasks()}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Todo);
