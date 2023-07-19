import { withStyles } from "@material-ui/styles";
import styles from "../tools/jss/signupStyles.js";

function Login(props) {
  const { classes } = props;

  return (
    <div className={classes.parent}>
      <p className={classes.name}>
        <span className={classes.span}>COM</span>panion
      </p>
      <div className={classes.signup}>
        <i className={`fa-solid fa-dove ${classes.icon}`}></i>
        <h2 className={classes.headText}>Welcome back</h2>
        <input className={classes.input} placeholder="mail" />
        <input className={classes.input} placeholder="password" />
        <button className={classes.btn}>Login</button>
        <p className={classes.text}>Register instead</p>
      </div>
    </div>
  );
}

export default withStyles(styles)(Login);
