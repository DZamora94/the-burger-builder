import React from "react";
import Aux from "../hoc/Auxiliary";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES: { [key: string]: number } = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 1,
  meat: 2,
};

class BurgerBuilder extends React.Component<{}> {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2.5,
    purchasable: false,
    purchasing: false,
  };

  private updatePurchaseState = (ingredients: { [key: string]: number }) => {
    const ingSum: number = Object.values(ingredients).reduce(
      (sum, val) => sum + val,
      0
    );
    this.setState({ purchasable: ingSum > 0 });
  };

  private addIngredientHandler = (type: string) => {
    const ingredients: { [key: string]: number } = this.state.ingredients;
    const newCount: number = ingredients[type] + 1;
    const newIngredients: { [key: string]: number } = {
      ...this.state.ingredients,
    };
    newIngredients[type] = newCount;
    const newPrice: number = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
    this.updatePurchaseState(newIngredients);
  };

  private removeIngredientHandler = (type: string) => {
    const ingredients: { [key: string]: number } = this.state.ingredients;
    const oldCount: number = ingredients[type];
    if (ingredients[type] <= 0) {
      return;
    }
    const newCount: number = oldCount - 1;
    const newIngredients: { [key: string]: number } = {
      ...this.state.ingredients,
    };
    newIngredients[type] = newCount;
    const newPrice: number = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
    this.updatePurchaseState(newIngredients);
  };

  private purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  private purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  private purchaseContinueHandler = () => {
    alert("Continue!");
  };

  render() {
    const ingredients: { [key: string]: number } = {
      ...this.state.ingredients,
    };
    let disableInfo: { [key: string]: boolean } = { meat: false };

    for (let key in ingredients) {
      disableInfo[key] = ingredients[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}
          ></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
