const Styles = {
  switch: {
    height: (props) => {
      return props.switchHeight;
    },
    width: (props) => {
      return props.switchWidth;
    },
    margin: 0,
    position: "absolute",
    appearance: "none",
    backgroundColor: "white",
    borderRadius: "100%",
    cursor: "pointer",
    transition: "600ms",
    "&:checked": {
      transform: "translateX(27px)",
      transition: "600ms",
    },
  },
  switchOuter: {
    width: (props) => {
      return props.width;
    },
    height: (props) => {
      return props.height;
    },
    backgroundColor: "black",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "6px",
    borderRadius: "29px",
  },
};

export default Styles;
