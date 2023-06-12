const styles = {
  timer: {
    width: "600px",
    borderRadius: "100%",
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    flexDirection: "column",
    backgroundColor: "#000033",
    gap: "10px",
  },
  timerInner: {
    width: "70%",
    padding: "30px",
    display: "flex",
    alignItems: "left",
    gap: "20px",
    justifyContent: "center",
    fontSize: "1.3rem",
    fontWeight: "800",
    flexDirection: "column",
  },
  hours: {
    width: "30%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    borderRadius: "13px",
    border: "1px solid white",
    background: (props) => {
      return `linear-gradient(to right,Turquoise 0%,Turquoise ${
        (props.time.hrs * 100) / 24
      }%,#000033 ${(props.time.hrs * 100) / 24}%,#000033 100%)`;
    },
  },
  seconds: {
    width: "70%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    borderRadius: "13px",
    border: "1px solid white",
    color: (props) => {},
    background: (props) => {
      return `linear-gradient(to right,#D2E9E9 0%,#27E1C1 ${
        (props.time.s * 100) / 60
      }%,#000033 ${(props.time.s * 100) / 60}%,#000033 100%)`;
    },
  },
  minutes: {
    width: "50%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    borderRadius: "13px",
    border: "1px solid white",
    background: (props) => {
      return `linear-gradient(to right,Turquoise 0%,Turquoise ${
        (props.time.min * 100) / 60
      }%,#000033 ${(props.time.min * 100) / 60}%,#000033 100%)`;
    },
  },
  text: {
    width: "20px",
    height: "20px",
    color: "white",
    padding: "10px",
    borderRadius: "100%",
    backgroundColor: "black",
    textAlign: "center",
    border: "1px solid white",
  },
};

export default styles;
