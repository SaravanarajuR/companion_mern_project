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
  changeVideo = () => {
    this.setState({ link: false });
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
            <i
              id="utube"
              onClick={this.props.minimise}
              className={`fa-solid fa-square-minus ${classes.mini}`}
            ></i>
            <iframe
              width="95%"
              height="95%"
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
            <i className={`fa-solid fa-maximize ${classes.expand}`}></i>
          </div>
        ) : (
          <form id="linkForm" className={classes.form}>
            <p className={classes.p}>Use only public playlist or video links</p>
            <i
              id="utube"
              onClick={this.props.minimise}
              className={`fa-solid fa-square-minus ${classes.mini}`}
            ></i>
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
