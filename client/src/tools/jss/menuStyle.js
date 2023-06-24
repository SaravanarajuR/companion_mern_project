const style = {
  "@keyframes strech": {
    from: {
      height: "100px",
    },
    to: {
      height: "400px",
    },
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    height: "400px",
    width: "100px",
    backgroundColor: "rgba(255,255,255,0.3)",
    color: "white",
    fontSize: "1.4rem",
    position: "absolute",
    right: "10px",
    paddingTop: "20px",
    top: "7%",
    borderRadius: "5px",
    gap: "20px",
    justifyContent: "fleStart",
    alignItems: "center",
    animation: " ease-in-out",
    animationName: "$strech",
    animationDuration: "300ms",
  },
  close: {
    display: "flex",
    justifyContent: "center",
    color: "#f69697",
    width: "100%",
    fontSize: "2rem",
  },
};

export default style;
