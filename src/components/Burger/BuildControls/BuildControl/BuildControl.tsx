import React, { FunctionComponent } from "react";
import styles from "./BuildControl.module.scss";

interface BuildControlProps {
  label: string;
}
const buildControl: FunctionComponent<BuildControlProps> = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less}>Less</button>
    <button className={styles.More}>More</button>
  </div>
);

export default buildControl;
