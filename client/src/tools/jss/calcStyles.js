const style = {
  parent: {
    width: "300px",
    height: "400px",
    padding: "20px",
    borderRadius: "10px",
    position: "absolute",
    top: "10px",
    left: "10px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  form: {
    width: "100%",
    height: "70px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
  screen: {
    width: "100%",
    height: "50%",
    resize: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    width: "300px",
    height: "300px",
    display: "grid",
    alignItems: "center",
    justifyContent: "space-evenly",
    gridTemplateColumns: "auto auto auto",
  },
  button: {
    width: "50px",
    height: "25px",
    borderRadius: "5px",
    border: "none",
  },
  subButton: {
    width: "200px",
    borderRadius: "5px",
    border: "none",
    height: "30px",
  },
};

export default style;
