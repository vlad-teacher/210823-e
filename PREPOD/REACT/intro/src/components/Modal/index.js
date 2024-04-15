import React from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";
import { FaXbox } from "react-icons/fa";

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalHeader} onClick={onClose}>
        <FaXbox style={{ cursor: "pointer" }} />
      </div>
      <div className={styles.modalContent}>{children}</div>
    </div>,
    document.body
  );
};
