import classes from "*.module.css";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  clicked: any;
  buttonType: "Success" | "Danger";
}

const button: React.FunctionComponent<ButtonProps> = (props) => (
  <button
    className={[styles.Button, styles[props.buttonType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
