import React, { FunctionComponent } from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

interface OrderSummaryProps {
  ingredients: { [key: string]: number };
  purchaseCancelled: Function;
  purchaseContinued: Function;
  totalPrice: number;
}

const orderSummary: FunctionComponent<OrderSummaryProps> = (props) => {
  const ingredientSummary: JSX.Element[] = Object.keys(props.ingredients).map(
    (ingKey) => (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:
        {props.ingredients[ingKey]}
      </li>
    )
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients!</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType={"Danger"} clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button buttonType={"Success"} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
