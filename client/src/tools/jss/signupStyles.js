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
  icon: {
    color: "white",
    fontSize: "40px",
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
    },
    "&::placeholder": {
      color: "#BEBEBE",
    },
  },
  headText: {
    color: "white",
    fontWeight: "900",
    fontSize: "35px",
    fontFamily: "Belanosima",
    margin: 0,
  },
  btn: {
    width: "60%",
    height: "7%",
    backgroundColor: "#02E03F",
    border: "none",
    fontSize: "15px",
    fontWeight: "700",
    borderRadius: "10px",
    color: "white",
  },
  text: {
    color: "#02E079",
    alignSelf: "flex-end",
    marginRight: "18%",
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
