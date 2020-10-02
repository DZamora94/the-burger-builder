import React, { FunctionComponent } from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.scss";

interface Controls {
  label: string;
  type: string;
}

const controls: Controls[] = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls: FunctionComponent<{}> = (props) => (
  <div className={styles.BuildControls}>
    {controls.map((control) => (
      <BuildControl key={control.label} label={control.label} />
    ))}
  </div>
);

export default buildControls;
