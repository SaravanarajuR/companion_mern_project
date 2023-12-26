const styles = {
  clock: {
    visibility: (props) => {
      return props.state.clock[1] ? "visible" : "hidden";
    },
    contentVisibility: (props) => {
      return props.state.clock[1] ? "visible" : "hidden";
    },
    width: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    position: "absolute",
    top: "10px",
    borderRadius: "10px",
    left: "10px",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  clockInner: {
    color: "white",
    gap: "5px",
    width: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  format: {
    display: "block",
  },
  clockText: {
    display: "inline",
    padding: "10px",
    backgroundColor: "rgba(0,0,0)",
    borderRadius: "8px",
  },
  switch: {
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
  },
  switchParent: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    fontWeight: "700",
    gap: "10px",
    borderRadius: "5px",
    padding: "10px",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  mini: {
    position: "absolute",
    top: "5px",
    fontSize: "1.7rem",
    right: "5px",
    color: "rgba(255,255,255,0.7)",
  },
};

export default styles;
