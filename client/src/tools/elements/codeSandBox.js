import { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Styles from "../jss/codeStyles";

class Code extends Component {
  static defaultProps = {
    link: "https://codesandbox.io/signin?utm_source=landingpage",
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.code}>
        <div>
          <i
            id="code"
            onClick={this.props.minimise}
            className={`fa-solid fa-square-minus ${classes.mini}`}
          ></i>
        </div>
        <embed
          width="100%"
          height="100%"
          title="code"
          src={this.props.link}
        ></embed>
      </div>
    );
  }
}

export default withStyles(Styles)(Code);
