import React, { Component } from "react";
import Styles from "../jss/youtubeStyles";
import { withStyles } from "@material-ui/styles";

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      link: false,
      eventId: "",
      size: false,
      screenId: "",
      width: "300",
      height: "200",
    };
  }
  componentDidMount() {
    document.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.target.id === "linkForm") {
        this.setState({ link: document.getElementById("linkInp").value });
      } else {
        this.setSize(e);
      }
    });
  }
  changeSize = () => {
    this.setState({ size: !this.state.size });
  };
  changeVideo = () => {
    this.setState({ link: false });
  };
  setSize = (e) => {
    e.preventDefault();
    this.setState({ width: e.target[0].value, height: e.target[1].value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.parent}>
        {this.state.link ? (
          <div
            width={this.state.width}
            height={this.state.height}
            className={classes.utube}
          >
            <iframe
              width={this.state.width}
              height={this.state.height}
              src={this.state.link
                .split("com")
                .join("com/embed")
                .split("watch?v=")
                .join("")}
              title="window"
            />
            <button className={classes.button} onClick={this.changeVideo}>
              Change video
            </button>
            <button
              onClick={this.changeSize}
              id="size"
              className={classes.button}
            >
              Change Size
            </button>
            {this.state.size ? (
              <form
                id="sizeForm"
                className={classes.sizeForm}
                onSubmit={this.setSize}
              >
                <input
                  required
                  min="0"
                  placeholder="width"
                  max={this.props.windowWidth}
                  className={classes.input}
                  type="number"
                ></input>
                <input
                  required
                  min="0"
                  className={classes.input}
                  placeholder="height"
                  max={this.props.windowHeight}
                  type="number"
                ></input>
                <button className={classes.button}>Change</button>
              </form>
            ) : (
              ""
            )}
          </div>
        ) : (
          <form id="linkForm" className={classes.form}>
            <input
              autoComplete="off"
              className={classes.input}
              placeholder="place your video link here"
              id="linkInp"
              type="text"
              required
            />
            <button className={classes.button} onClick={this.handleLink}>
              Open
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default withStyles(Styles)(Youtube);
