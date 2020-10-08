import React from "react";
import styles from "./NavigationItem.module.scss";

interface NavigationItemProps {
  link: string;
  active?: boolean;
}

const navigationItem: React.FunctionComponent<NavigationItemProps> = (
  props
) => (
  <li className={styles.NavigationItem}>
    <a href={props.link} className={props.active ? styles.active : undefined}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
