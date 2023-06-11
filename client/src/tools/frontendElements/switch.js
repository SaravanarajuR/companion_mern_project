import React from "react";
import { withStyles } from "@material-ui/styles";
import Styles from "../jss/switch";

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
