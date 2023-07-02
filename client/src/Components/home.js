import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../tools/jss/homeStyles";
import StopWatch from "../tools/elements/stopWatch";
import Menu from "../tools/elements/menu";
import Youtube from "../tools/elements/youtube";
import Code from "../tools/elements/codeSandBox";
import window from "global";
import Timer from "../tools/elements/timer";
import Clock from "../tools/elements/clock";
import Todo from "../tools/elements/todoList";
import TaskBar from "../tools/elements/taskBar";
import Calc from "../tools/elements/calculator";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      timer: [false, true],
      youtube: [false, true],
      menu: [false, true],
      todo: [false, true],
      utube: [false, true],
      calc: [false, true],
      stopwatch: [false, true],
      notes: [false, true],
      mech: [false, true],
      fullScreen: [false, true],
      clock: [false, true],
      code: [false, true],
      used: false,
      taskbar: false,
      music: [false, true],
      windowWidth: window.innerWidth - 100,
      windowHeight: window.innerHeight - 100,
    };
  }
  handleWindow = () => {
    this.setState({
      windowWidth: window.innerWidth - 100,
      windowHeight: window.innerHeight - 100,
    });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindow);
  }
  handleVisibility = (e) => {
    e.stopPropagation();
    const arr = this.state[e.target.id];
    if (arr[0] && !arr[1]) {
      arr[1] = !arr[1];
    }
    arr[0] = !arr[0];
    this.setState({ [e.target.id]: arr });
  };
  handleFullScreen = (e) => {
    e.stopPropagation();
    if (this.state.fullScreen[0]) {
      document.exitFullscreen();
      const arr = this.state[`fullScreen`];
      arr[0] = !arr[0];
      this.setState({ fullScreen: arr });
    } else {
      document.getElementById("root").requestFullscreen();
      const arr = this.state[`fullScreen`];
      arr[0] = !arr[0];
      this.setState({ fullScreen: arr });
    }
  };
  handleMinimise = (e) => {
    e.stopPropagation();
    const arr = this.state[e.target.id];
    arr[1] = !arr[1];
    if (!this.state.taskbar) {
      setTimeout(() => {
        this.setState({ taskbar: false });
      }, 1000);
    }
    this.setState({ [e.target.id]: arr, taskbar: true });
  };
  changeBackground = (e) => {
    e.stopPropagation();
    if (e.target.files[0]) {
      let image = e.target.files[0];
      let fr = new FileReader();
      new Promise(() => {
        fr.readAsDataURL(image);
        fr.onload = () => {
          this.setState({ image: fr.result });
        };
      });
    }
  };
  closeBar = () => {
    this.setState({ taskbar: !this.state.taskbar });
  };
  render() {
    const { classes } = this.props;
    const bg = {
      backgroundImage: `url(${this.state.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
    return (
      <div id="top" style={bg} className={classes.home}>
        <div className={classes.backParent}>
          <label id="visibility" className={classes.customInputButton}>
            <input
              accept=".png, .jpg, .jpeg"
              className={classes.inp}
              onChange={this.changeBackground}
              type="file"
              id="image"
            />
            Choose a Custom background
            <i value="wallpaper" className="fa-solid fa-image"></i>
          </label>
        </div>
        {this.state.clock[0] ? (
          <Clock state={this.state} minimise={this.handleMinimise} />
        ) : (
          ""
        )}
        {this.state.todo[0] ? (
          <Todo state={this.state} minimise={this.handleMinimise} />
        ) : (
          ""
        )}
        {this.state.stopwatch[0] ? (
          <StopWatch state={this.state} minimise={this.handleMinimise} />
        ) : (
          ""
        )}
        {this.state.utube[0] ? (
          <Youtube state={this.state} minimise={this.handleMinimise} />
        ) : (
          ""
        )}
        {this.state.calc[0] ? <Calc /> : ""}
        {this.state.menu[0] ? (
          <Menu
            handleVisibility={this.handleVisibility}
            handleMenu={this.handleMenu}
            fs={this.handleFullScreen}
          />
        ) : (
          <div
            id="menu"
            className={classes.menuIcon}
            onClick={this.handleVisibility}
          >
            <i
              id="menu"
              onClick={this.handleMenu}
              className="fa-solid fa-bars"
            ></i>
          </div>
        )}
        {this.state.timer[0] ? (
          <Timer minimise={this.handleMinimise} state={this.state} />
        ) : (
          ""
        )}
        {this.state.code[0] ? (
          <Code state={this.state} minimise={this.handleMinimise} />
        ) : (
          ""
        )}
        {this.state.taskbar ? (
          <TaskBar
            state={this.state}
            minimise={this.handleMinimise}
            closeBar={this.closeBar}
          />
        ) : (
          <div className={classes.taskbar} onClick={this.closeBar}>
            <div className={classes.icon}>
              <span className={`fa-solid fa-angles-up`}></span>
            </div>
            <div className={classes.fakeTask}></div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
