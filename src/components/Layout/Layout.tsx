import React from "react";
import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";
import styles from "./Layout.module.scss";

const layout: React.FunctionComponent<{}> = (props) => (
  <Aux>
    <Toolbar />
    <Sidedrawer />
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
