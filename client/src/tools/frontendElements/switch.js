import React from "react";
import { createStyles, withStyles } from "@material-ui/styles";

const Styles = createStyles({
  switch: {
    height: "20px",
    width: "20px",
    margin: 0,
    position: "absolute",
    appearance: "none",
    backgroundColor: "white",
    borderRadius: "100%",
    cursor: "pointer",
    transition: "600ms",
    "&:checked": {
      transform: "translateX(27px)",
      transition: "600ms",
    },
  },
  switchOuter: {
    width: "50px",
    height: "23px",
    backgroundColor: "black",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "6px",
    borderRadius: "29px",
  },
});

function Tool(props) {
  const handleCheck = () => {
    const check = document.getElementById("checkbox");
    check.checked = !check.checked;
  };
  const { classes } = props;
  return (
    <div>
      <div className={classes.switchOuter} onClick={handleCheck}>
        <input
          id="checkbox"
          type="checkbox"
          onClick={handleCheck}
          className={classes.switch}
        />
      </div>
    </div>
  );
}

export default withStyles(Styles)(Tool);
