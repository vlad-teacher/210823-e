import React from "react";
import styles from "./index.module.css";

// two way binding

export const Input = ({ onChange, value }) => {
  return (
    <input
      type="text"
      value={value}
      className={styles.common}
      onChange={onChange}
    />
  );
};
