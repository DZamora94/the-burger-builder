import { FunctionComponent } from "react";

import React from "react";
import styles from "./Burger.module.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface BurgerProps {
  ingredients: { [key: string]: number };
}

const burger: FunctionComponent<BurgerProps> = (props) => {
  let ingredientsJsx = Object.keys(props.ingredients)
    .map((ingKey: string) => {
      return [...Array(props.ingredients[ingKey])].map((_, i: number) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr: JSX.Element[], el: JSX.Element[]) => arr.concat(el), []);

  if (ingredientsJsx.length === 0) {
    ingredientsJsx = [<p key="0">Please start adding ingredients!</p>];
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {ingredientsJsx}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
