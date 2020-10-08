import React from "react";
import styles from "./Logo.module.scss";

import burgerLogo from "../../assets/images/burger-logo.png";

const logo: React.FunctionComponent<{}> = (props) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="burger-logo" />
  </div>
);

export default logo;
