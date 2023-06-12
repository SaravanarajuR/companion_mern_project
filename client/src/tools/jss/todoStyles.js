const styles = {
  input: {
    width: "240px",
    padding: "4px 15px",
    height: "7%",
    appearance: "none",
    backgroundColor: "rgba(255,255,255,0.6)",
    border: "none",
    borderRadius: "3px",
    "&:focus": {
      border: "none",
      backgroundColor: "rgba(255,255,255,0.5)",
    },
  },
  form: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexDirection: "column",
  },
  parent: {
    backgroundColor: "#000033",
    width: "90%",
    height: "90%",
    padding: "20px",
    borderRadius: "10px",
  },
  button: {
    width: "100px",
    height: "30px",
    backgroundColor: "rgba(255,255,255,0.5)",
    border: "none",
    borderRadius: "3px",
  },
  list: {
    overflow: "auto",
    height: "70%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  task: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    width: "45%",
    height: "150px",
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  font: {
    fontFamily: "georgia",
    fontSize: "1.2rem",
    color: "white",
  },
  dis: {
    padding: "5px 10px",
    borderRadius: "3px",
    backgroundColor: "white",
    width: "60px",
    display: "flex",
    justifyContent: "space-around",
  },
};

export default styles;
