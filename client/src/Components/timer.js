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
      interval: "",
      lap: [],
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({
        sec: this.state.sec + 0.1,
        s: this.state.s + 0.1 >= 60 ? 0 : this.state.s + 0.1,
        min: Math.floor(this.state.sec / 60 === 60 ? 0 : this.state.sec / 60),
        hrs: Math.floor(this.state.sec / (60 * 60)),
      });
    }, 100);
    this.setState({ interval: intervalId });
  }

  handleStop = () => {
    clearInterval(this.state.interval);
  };

  handleResume = () => {
    clearInterval(this.state.interval);
    this.componentDidMount();
  };

  handleLap = () => {
    this.setState({
      lap: [
        ...this.state.lap,
        `${this.state.hrs}:${this.state.min}:${Math.floor(this.state.s)}`,
      ],
    });
  };
  handlereset = () => {
    this.setState({ s: 0, sec: 0, hrs: 0, min: 0, lap: [] });
  };
  render() {
    return (
      <Clock
        time={this.state}
        stop={this.handleStop}
        resume={this.handleResume}
        addLap={this.handleLap}
        reset={this.handlereset}
      />
    );
  }
}
export default Timer;
