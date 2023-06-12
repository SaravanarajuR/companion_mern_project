import { Component } from "react";
import Clock from "../tools/elements/timerClock";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      s: 0,
      sec: 0,
      min: 0,
      hrs: 0,
    };
    setInterval(() => {
      this.setState({
        sec: this.state.sec + 0.1,
        s: this.state.s + 0.1 >= 60 ? 0 : this.state.s + 0.1,
        min: Math.floor(this.state.sec / 60 === 60 ? 0 : this.state.sec / 60),
        hrs: Math.floor(this.state.sec / (60 * 60)),
      });
    }, 100);
  }
  render() {
    return <Clock time={this.state} />;
  }
}
export default Timer;
