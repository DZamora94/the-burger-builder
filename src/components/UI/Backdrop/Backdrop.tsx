import React from "react";
import styles from "./Backdrop.module.scss";

interface BackdropProps {
  show: boolean;
  clicked: any;
}

const backdrop: React.FunctionComponent<BackdropProps> = (props) =>
  props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
