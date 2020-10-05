import React from "react";
import Aux from "../hoc/Auxiliary";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES: { [key: string]: number } = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 1,
  meat: 2,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2.5,
  };

  private addIngredientHandler = (type: string) => {
    const ingredients: { [key: string]: number } = this.state.ingredients;
    const oldCount: number = ingredients[type];
    const newCount: number = oldCount + 1;
    const newIngredients: { [key: string]: number } = {
      ...this.state.ingredients,
    };
    newIngredients[type] = newCount;
    const priceAddition: number = INGREDIENT_PRICES[type];
    const oldPrize: number = this.state.totalPrice;
    const newPrice: number = oldPrize + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
  };

  private removeIngredientHandler = (type: string) => {
    const ingredients: { [key: string]: number } = this.state.ingredients;
    const oldCount: number = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount: number = oldCount - 1;
    const newIngredients: { [key: string]: number } = {
      ...this.state.ingredients,
    };
    newIngredients[type] = newCount;
    const priceDeduction: number = INGREDIENT_PRICES[type];
    const oldPrize: number = this.state.totalPrice;
    const newPrice: number = oldPrize - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
  };

  render() {
    const ingredients: { [key: string]: number } = this.state.ingredients;
    let disableInfo: { [key: string]: boolean } = { meat: false };

    for (let key in ingredients) {
      disableInfo[key] = ingredients[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
