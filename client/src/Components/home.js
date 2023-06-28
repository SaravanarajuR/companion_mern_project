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
import TaskBar from "../tools/elements/taskBar";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      timer: [false, true],
      youtube: [false, true],
      menu: [false, true],
      utube: [false, true],
      stopwatch: [false, true],
      mech: [false, true],
      fullScreen: [false, true],
      clock: [false, true],
      code: [false, true],
      taskbar: true,
      windowWidth: window.innerWidth - 100,
      windowHeight: window.innerHeight - 300,
    };
  }
  handleWindow = () => {
    this.setState({
      windowWidth: window.innerWidth - 100,
      windowHeight: window.innerHeight - 300,
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
        <Clock />
        {this.state.stopwatch[0] ? <StopWatch /> : ""}
        {this.state.utube[0] ? (
          <Youtube
            windowWidth={this.state.windowWidth}
            windowHeight={this.state.windowHeight}
          />
        ) : (
          ""
        )}
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
        {this.state.timer[0] ? <Timer /> : ""}
        {this.state.code[0] ? <Code /> : ""}
        {this.state.taskbar ? (
          <TaskBar />
        ) : (
          <div className={classes.taskbar}>
            <i className="fa-solid fa-angles-up"></i>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
