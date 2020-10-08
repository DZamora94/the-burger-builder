import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";
import styles from "./Toolbar.module.scss";

interface ToolbarProps {
  drawerToggleClicked: Function;
}

const toolbar: React.FunctionComponent<ToolbarProps> = (props) => (
  <header className={styles.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default toolbar;
