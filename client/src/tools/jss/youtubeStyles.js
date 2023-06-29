const styles = {
  input: {
    width: "240px",
    height: "30px",
    padding: "0 9px",
    borderRadius: "5px",
    border: "none",
  },
  button: {
    width: "160px",
    height: "29px",
    borderRadius: "7px",
    border: "none",
  },
  form: {
    width: "300px",
    height: "90px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "15px",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  parent: {
    contentVisibility: (props) => {
      return props.state.utube[1] ? "visible" : "hidden";
    },
    visibility: (props) => {
      return props.state.utube[1] ? "visible" : "hidden";
    },
    position: "absolute",
    top: "10px",
    left: "10px",
  },
  utube: {
    borderRadius: "5px",
    padding: "20px",
    backgroundColor: "rgba(255,255,255,0.3)",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  sizeForm: {
    backgroundColor: "rgba(0,0,0,0.5)",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    alignItems: "center",
  },
  mini: {
    color: "rgba(0,0,0,0.7)",
    fontSize: "1.7rem",
    position: "absolute",
    top: "5px",
    right: "5px",
  },
};

export default styles;
