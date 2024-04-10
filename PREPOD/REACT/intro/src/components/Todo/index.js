import React, { useState } from "react";
import styles from "./index.module.css";
import { FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa";

export const Todo = ({
  text,
  done,
  id,
  onToggleTodo,
  onDeleteTodo,
  onToggleTodoEdit,
  isEdit,
}) => {
  const [inputText, setInputText] = useState(text);
  const todoClassName = styles.todo + " " + (done ? styles.done : "");

  const onInputChange = ({ target: { value } }) => {
    setInputText(value);
  };

  return (
    <div className={todoClassName}>
      {isEdit ? (
        <input value={inputText} onChange={onInputChange} />
      ) : (
        <span>{text}</span>
      )}
      <FaCheckCircle
        className={styles.icon + " " + (done ? styles.iconDone : "")}
        onClick={() => onToggleTodo(id)}
      />
      {/* TODO добавить обработчик */}
      <FaEdit
        className={styles.icon}
        onClick={() => onToggleTodoEdit(id, inputText)}
      />
      <FaTrash className={styles.icon} onClick={() => onDeleteTodo(id)} />
    </div>
  );
};
