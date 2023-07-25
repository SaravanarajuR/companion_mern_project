import { withStyles } from "@material-ui/styles";
import styles from "../tools/jss/signupStyles.js";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const { classes } = props;
  const navigate = useNavigate();

  return (
    <div className={classes.parent}>
      <p className={classes.name}>
        <span className={classes.span}>C</span>ompanion
      </p>
      <div className={classes.signup}>
        <i className={`fa-solid fa-dove ${classes.icon}`}></i>
        <h2 className={classes.headText}>Join Us</h2>
        <form className={classes.form} action="/signup" method="post">
          <input
            autoComplete="off"
            className={classes.input}
            name="username"
            placeholder="Username"
          />
          <input
            autoComplete="off"
            className={classes.input}
            name="mail"
            placeholder="mail"
          />
          <input
            autoComplete="off"
            className={classes.input}
            name="password"
            placeholder="password"
          />
          <button className={classes.btn}>Register</button>
          <p
            className={classes.text}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login instead
          </p>
        </form>
      </div>
    </div>
  );
}

export default withStyles(styles)(Signup);
