import { FunctionComponent } from "react";

import React from "react";
import styles from "./Burger.module.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger: FunctionComponent<{}> = (props) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      <BurgerIngredient type="cheese"></BurgerIngredient>
      <BurgerIngredient type="meat"></BurgerIngredient>
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
