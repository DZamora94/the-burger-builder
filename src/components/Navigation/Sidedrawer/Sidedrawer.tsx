import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";
import styles from "./Sidedrawer.module.scss";

interface SidedrawerProps {
  closed: Function;
  open: boolean;
}

const sidedrawer: React.FunctionComponent<SidedrawerProps> = (props) => {
  let attachedClasses = [styles.Sidedrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.Sidedrawer, styles.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default sidedrawer;
