import React, { Component } from "react";

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      link: false,
      eventId: "",
    };
  }
  componentDidMount() {
    const event = document.addEventListener("submit", (e) => {
      e.preventDefault();
      this.setState({ link: document.getElementById("linkInp").value });
    });
    this.setState({ eventId: event });
  }
  componentWillUnmount() {
    document.removeEventListener("submit", this.state.eventId);
  }
  render() {
    return (
      <div>
        {this.state.link ? (
          <iframe
            width="400"
            height="300"
            src={this.state.link
              .split("com")
              .join("com/embed")
              .split("watch?v=")
              .join("")}
            title="window"
          />
        ) : (
          <form>
            <input id="linkInp" type="text" required />
            <button onClick={this.handleLink}></button>
          </form>
        )}
      </div>
    );
  }
}

export default Youtube;
