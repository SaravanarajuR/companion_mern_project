const styles = {
  timer: {
    contentVisibility: (props) => {
      return props.state.stopwatch[1] ? "visible" : "hidden";
    },
    visibility: (props) => {
      return props.state.stopwatch[1] ? "visible" : "hidden";
    },
  },
};
export default styles;
