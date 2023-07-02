const style = {
  "@keyframes bringTop": {
    from: {
      height: "10px",
    },
    to: {
      height: "70px",
    },
  },
  taskbar: {
    width: "90%",
    position: "absolute",
    borderRadius: "10px",
    bottom: "0px",
    left: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    animationName: "$bringTop",
    animationTimingFunction: "linear",
    animationDuration: "300ms",
  },
  tasks: {
    backgroundColor: "rgba(0,0,0,0.7)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    fontSize: "25px",
    padding: "10px 0",
    justifyContent: "center",
    color: "white",
    height: "35px",
    borderRadius: "10px 10px 0 0",
  },
  close: {
    width: "160px",
    backgroundColor: "rgba(0,0,0,0.7)",
    height: "18px",
    padding: "10px 0 0 0",
    textAlign: "center",
    color: "white",
    borderRadius: "4px 4px 0 0",
    fontSize: "1.2rem",
  },
  task: {
    padding: "5px",
    width: "30px",
    borderRadius: "5px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  },
};

export default style;
