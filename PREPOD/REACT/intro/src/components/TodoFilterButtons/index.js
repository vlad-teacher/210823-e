import React from "react";
import styles from "./index.module.css";

export const TodoFilterButtons = ({ currentFilter, onChange }) => {
  return (
    <div className={styles.filter}>
      <button
        className={currentFilter === "all" ? styles.active : ""}
        name="all"
        onClick={onChange}
      >
        All
      </button>
      <button
        className={currentFilter === "done" ? styles.active : ""}
        name="done"
        onClick={onChange}
      >
        Done
      </button>
      <button
        className={currentFilter === "undone" ? styles.active : ""}
        name="undone"
        onClick={onChange}
      >
        Undone
      </button>
    </div>
  );
};
