import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.scss";

interface BuildControlProps {
  ingredientAdded: Function;
  ingredientRemoved: Function;
  disabled: { [key: string]: boolean };
  price: number;
}

interface Controls {
  label: string;
  type: string;
};

const controls: Controls[] = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls: React.FunctionComponent<BuildControlProps> = (props) => (
  <div className={styles.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
  </div>
);

export default buildControls;
