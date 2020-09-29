import React from "react";
import styles from "./BurgerIngredient.module.scss";

interface BurgerIngredientProps {
  type: string;
}

const burgerIngredient: React.FunctionComponent<BurgerIngredientProps> = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      <div className={styles.Meat}></div>;
      break;
    case "cheese":
      <div className={styles.Cheese}></div>;
      break;
    case "bacon":
      <div className={styles.Bacon}></div>;
      break;
    case "salad":
      <div className={styles.Salad}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;
