import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./Toolbar.module.scss";

const toolbar: React.FunctionComponent<{}> = (props) => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;