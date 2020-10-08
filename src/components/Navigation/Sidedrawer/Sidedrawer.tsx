import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./Sidedrawer.module.scss";

const sidedrawer: React.FunctionComponent<{}> = (props) => {
  return (
    <div className={styles.Sidedrawer}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default sidedrawer;
