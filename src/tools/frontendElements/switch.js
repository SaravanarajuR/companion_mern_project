import React from "react";
import { withStyles } from "@material-ui/styles";
import Styles from "../jss/switchStyles";

function Switch(props) {
  const handleCheck = () => {
    const check = document.getElementById(`${props.id}`);
    check.checked = !check.checked;
    props.change();
  };
  const { classes } = props;
  return (
    <div className={classes.switchOuter} onClick={handleCheck}>
      <input
        id={props.id}
        type="checkbox"
        onClick={handleCheck}
        className={classes.switch}
      />
    </div>
  );
}

export default withStyles(Styles)(Switch);
