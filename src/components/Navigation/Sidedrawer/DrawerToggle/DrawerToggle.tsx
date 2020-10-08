import React from "react";
import styles from "./DrawerToggle.module.scss";

interface DrawerToggleProps {
  clicked: any;
}

const drawerToggle: React.FunctionComponent<DrawerToggleProps> = (props) => (
  <div onClick={props.clicked} className={styles.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
