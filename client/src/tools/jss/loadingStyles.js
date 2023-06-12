const styles = {
  loader: {
    border: "1px solid white",
    width: "240px",
    height: "10px",
    borderRadius: "3px",
  },
  loading: {
    borderRadius: "3px",
    height: "100%",
    width: "40px",
    backgroundColor: "rgba(255,255,255,0.7)",
    animation: "$load 1.5s infinite",
    animationTimingFunction: "linear",
  },
  parent: {
    backgroundColor: "#000033",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "@keyframes load": {
    "0%": {
      transform: "translateX(0)",
    },
    "10%": {
      transform: "translateX(40px)",
    },
    "20%": {
      transform: "translateX(80px)",
    },
    "30%": {
      transform: "translateX(120px)",
    },
    "40%": {
      transform: "translateX(160px)",
    },
    "50%": {
      transform: "translateX(200px)",
    },
  },
};

export default styles;
