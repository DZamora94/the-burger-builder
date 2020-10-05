import React from "react";
import styles from "./BuildControl.module.scss";

interface BuildControlProps {
  label: string;
  added: any;
  removed: any;
  disabled: boolean;
}

const buildControl: React.FunctionComponent<BuildControlProps> = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button
      className={styles.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={styles.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
