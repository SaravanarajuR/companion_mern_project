const Styles = {
  code: {
    visibility: (props) => {
      return props.state.code[1] ? "visible" : "hidden";
    },
    contentVisibility: (props) => {
      return props.state.code[1] ? "visible" : "hidden";
    },
    width: "80%",
    height: "80%",
    position: "absolute",
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "2%",
  },
  mini: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255)",
    padding: "1px",
    borderRadius: "3px",
    top: "5px",
    fontSize: "1.7rem",
    right: "5px",
    zIndex: "1001",
  },
};

export default Styles;
