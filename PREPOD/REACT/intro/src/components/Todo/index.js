import React from "react";
import styles from "./index.module.css";
import { FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa";

export const Todo = ({ text, done, id, onTodoClick, onToggleTodo, onDeleteTodo, isEdit }) => {
  const todoClassName = styles.todo + " " + (done ? styles.done : "");

  return (
    <div className={todoClassName}>
        {/* TODO добавить условный рендеринг */}
      <span>{text}</span>
      <FaCheckCircle
        className={styles.icon + " " + (done ? styles.iconDone : "")}
        onClick={() => onToggleTodo(id)}
      />
      {/* TODO добавить обработчик */}
      <FaEdit className={styles.icon} />
      <FaTrash className={styles.icon} onClick={() => onDeleteTodo(id)} />
    </div>
  );
};
