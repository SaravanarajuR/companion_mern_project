import { createStyles } from "@material-ui/styles";
const styles = createStyles({
  parent: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "10px",
    height: "400px",
    width: "300px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10px",
    left: "10px",
    display: "flex",
    gap: "10px",
  },
  inp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
  },
  timeInp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.3rem",
    width: "50px",
    textAlign: "center",
    fontWeight: "700",
    height: "50px",
    borderRadius: "10px",
    border: "none",
  },
  time: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  taskInp: {
    color: "black",
    padding: "5px 10px",
    width: "160px",
    borderRadius: "10px",
    height: "25px",
  },
  tasks: {
    display: "flex",
    flexDirection: "column",
    height: "200px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "5px",
      backgroundColor: "white",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "black",
      width: "5px",
    },
  },
});

export default styles;
