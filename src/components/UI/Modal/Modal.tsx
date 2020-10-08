import React from "react";
import styles from "./Modal.module.scss";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

interface ModalProps {
  show: boolean;
  modalClosed: Function;
  children: React.ReactNode;
}

const modal: React.FunctionComponent<ModalProps> = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={styles.Modal}
      >
        {props.children}
      </div>
    </Aux>
  );
}

export default React.memo(modal, (prevProps, nextProps) => prevProps.show === nextProps.show);
