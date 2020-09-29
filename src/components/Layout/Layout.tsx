import React from "react";
import Aux from "../../hoc/Auxiliary";
import styles from './Layout.module.scss';

const layout: React.FunctionComponent<{}> = (props) => (
  <Aux>
    <div className={styles.Content}>Toolbar, Sidedrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
