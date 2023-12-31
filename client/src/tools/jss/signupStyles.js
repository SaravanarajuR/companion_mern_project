const styles = {
  parent: {
    width: "100%",
    height: "100%",
    backgroundColor: "#013243",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "20px",
    width: "60%",
    height: "70%",
    display: "flex",
    position: "relative",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    height: "80%",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
  },
  icon: {
    color: "white",
    fontSize: "40px",
    filter: "drop-shadow(10px 7px 3px rgba(0,0,0,0.7))",
  },
  input: {
    width: "60%",
    height: "10%",
    borderRadius: "5px",
    border: "none",
    padding: "0 10px",
    fontWeight: "700",
    color: "white",
    backgroundColor: "rgba(255,255,255,0.2)",
    "&:focus": {
      border: "2px solid white",
      outline: "none",
      backgroundColor: "rgba(255,255,255,0.2)",
    },
    "&::placeholder": {
      color: "#BEBEBE",
    },
  },
  headText: {
    color: "white",
    fontWeight: "900",
    fontSize: "35px",
    fontFamily: "'Libre Baskerville', serif",
    userSelect: "none",
    margin: 0,
  },
  btn: {
    width: "50%",
    height: "auto",
    backgroundColor: "#02E03F",
    padding: "10px 0",
    border: "none",
    fontSize: "16px",
    fontWeight: "800",
    borderRadius: "10px",
    color: "rgba(0,0,0,0.5)",
  },
  text: {
    color: "#02E079",
    alignSelf: "flex-end",
    marginRight: "18%",
    userSelect: "none",
    cursor: "pointer",
    fontWeight: "700",
  },
  name: {
    color: "white",
    fontSize: "25px",
    fontWeight: "800",
    position: "absolute",
    top: "15px",
    left: "20px",
    margin: 0,
  },
  span: {
    color: "#02E079",
  },
};

export default styles;
