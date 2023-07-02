import { withStyles } from "@material-ui/styles";
import style from "../jss/calcStyles";

function Calc(props) {
  const { classes } = props;
  return (
    <div className={classes.parent}>
      <form className={classes.form}>
        <textarea className={classes.screen}></textarea>
        <button className={classes.subButton}>Calculate</button>
      </form>
      <div className={classes.buttons}>
        <button className={classes.button}>1</button>
        <button className={classes.button}>2</button>
        <button className={classes.button}>3</button>
        <button className={classes.button}>4</button>
        <button className={classes.button}>5</button>
        <button className={classes.button}>6</button>
        <button className={classes.button}>7</button>
        <button className={classes.button}>8</button>
        <button className={classes.button}>9</button>
      </div>
    </div>
  );
}

export default withStyles(style)(Calc);
