const styles = {
  input: {
    width: "240px",
    height: "40px",
    padding: "0 9px",
    borderRadius: "5px",
    border: "none",
  },
  button: {
    width: "160px",
    height: "29px",
    borderRadius: "7px",
    border: "none",
  },
  p: {
    position: "absolute",
    top: "-10px",
    fontWeight: "800",
    color: "white",
  },
  form: {
    width: "300px",
    height: "90px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    gap: "15px",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  parent: {
    contentVisibility: (props) => {
      return props.state.utube[1] ? "visible" : "hidden";
    },
    visibility: (props) => {
      return props.state.utube[1] ? "visible" : "hidden";
    },
    position: "absolute",
    top: "10px",
    left: "10px",
  },
  utube: {
    borderRadius: "5px",
    padding: "20px 10px 10px 10px",
    backgroundColor: "rgba(0,0,0,0.7)",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    resize: "both",
    overflow: "auto",
    maxHeight: (props) => props.state.windowHeight,
    maxWidth: (props) => props.state.windowWidth,
    "&::-webkit-resizer": {
      display: "none",
    },
  },
  mini: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "1.7rem",
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  expand: {
    position: "absolute",
    bottom: "5px",
    right: "5px",
    color: "rgba(255,255,255,0.7)",
  },
};

export default styles;
