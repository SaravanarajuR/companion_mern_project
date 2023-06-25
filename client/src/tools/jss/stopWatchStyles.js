const styles = {
  timer: {
    width: "20%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,0.5)",
    gap: "10px",
  },
  timerClass: {
    width: "70%",
    display: "flex",
    borderRadius: "13px",
    padding: "0 10px",
    height: "15px",
    gap: "5px",
    backgroundColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  timerInner: {
    height: "100%",
    width: "70%",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
    fontSize: "1.3rem",
    fontWeight: "800",
    flexDirection: "column",
  },
  hours: {
    width: "30%",
    height: "10px",
    display: "flex",
    alignItems: "center",
    borderRadius: "13px",
    border: "1px solid black",
    background: (props) => {
      return `linear-gradient(to right,Turquoise 0%,Turquoise ${
        (props.time.hrs * 100) / 24
      }%,#000033 ${(props.time.hrs * 100) / 24}%,#000033 100%)`;
    },
  },
  seconds: {
    width: "90%",
    height: "10px",
    display: "flex",
    alignItems: "center",
    borderRadius: "13px",
    border: "1px solid black",
    color: (props) => {},
    background: (props) => {
      return `linear-gradient(to right,#D2E9E9 0%,#27E1C1 ${
        (props.time.s * 100) / 60
      }%,#000033 ${(props.time.s * 100) / 60}%,#000033 100%)`;
    },
  },
  minutes: {
    width: "60%",
    height: "10px",
    display: "flex",
    alignItems: "center",
    borderRadius: "13px",
    border: "1px solid black",
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
  button: {
    width: "30px",
    height: "20px",
    color: "black",
    backgroundColor: "turquoise",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 10px",
    borderRadius: "3px",
  },
  buttons: {
    width: "100%",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  select: {
    width: "100px",
    height: "20px",
    color: "white",
    backgroundColor: "black",
  },
};

export default styles;
