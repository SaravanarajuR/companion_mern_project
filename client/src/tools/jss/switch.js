const Styles = {
  switch: {
    height: "20px",
    width: "20px",
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
    width: "50px",
    height: "23px",
    backgroundColor: "black",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "6px",
    borderRadius: "29px",
  },
};

export default Styles;
