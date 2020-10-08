import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.scss";

const navigationItems: React.FunctionComponent<{}> = (props) => (
  <ul className={styles.NavigationItems}>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Chackout</NavigationItem>
  </ul>
);

export default navigationItems;
