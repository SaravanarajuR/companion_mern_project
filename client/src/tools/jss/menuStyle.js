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
    zIndex: 1001,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    width: "40px",
    backgroundColor: "rgba(255,255,255,0.3)",
    color: "white",
    fontSize: "1.4rem",
    position: "absolute",
    right: "10px",
    padding: "20px 0",
    top: "10px",
    borderRadius: "10px",
    gap: "20px",
    justifyContent: "flexStart",
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
    fontSize: "1.9rem",
  },
};

export default style;
