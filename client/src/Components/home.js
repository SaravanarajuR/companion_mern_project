import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../tools/jss/homeStyles";
import Timer from "./timer";
import Menu from "../tools/elements/menu";
import Youtube from "../tools/elements/youtube";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      wallpaper: false,
      timer: false,
      youtube: false,
      menu: false,
      utube: "",
      fullScreen: false,
    };
  }
  handleVisibility = (e) => {
    this.setState({ [e.target.id]: !this.state[e.target.id] });
  };
  handleFullScreen = () => {
    if (this.state.fullScreen) {
      document.exitFullscreen();
      this.setState({ fullScreen: false });
    } else {
      document.getElementById("root").requestFullscreen();
      this.setState({ fullScreen: true });
    }
  };
  changeBackground = (e) => {
    let image = e.target.files[0];
    let fr = new FileReader();
    new Promise(() => {
      fr.readAsDataURL(image);
      fr.onload = () => {
        this.setState({ image: fr.result, wallpaper: false });
      };
    });
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
        <div
          id="wallpaper"
          onClick={this.handleVisibility}
          className={classes.backParent}
        >
          <div id="wallpaper" className={classes.back}>
            <p id="wallpaper" className={classes.backText}>
              Choose Custom Background
            </p>
            <i value="wallpaper" className="fa-solid fa-image"></i>
          </div>
          {this.state.wallpaper ? (
            <label id="visibility" className={classes.customInputButton}>
              <input
                accept=".png, .jpg, .jpeg"
                className={classes.inp}
                onChange={this.changeBackground}
                type="file"
                id="image"
              />
              Choose an image
            </label>
          ) : (
            ""
          )}
        </div>
        {this.state.timer ? <Timer /> : ""}
        {this.state.utube ? <Youtube /> : ""}
        {this.state.menu ? (
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
              className="fa-solid fa-square-caret-down"
            ></i>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
