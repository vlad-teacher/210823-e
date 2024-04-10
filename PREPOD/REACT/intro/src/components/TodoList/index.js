import React from "react";
import { Todo } from "../Todo";
import styles from "./index.module.css";

// TODO filter
export const TodoList = ({ todos, onTodoClick, onToggleTodo,onDeleteTodo }) => {
  return (
    <div className={styles.list}>
      {todos.map((props) => (
        <Todo
          {...props}
          onTodoClick={onTodoClick}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

// [{},{},{}] =====>>>>>> [<Todo/>, <Todo/>, <Todo/>]
