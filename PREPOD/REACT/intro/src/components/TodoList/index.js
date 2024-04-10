import React from "react";
import { Todo } from "../Todo";
import styles from "./index.module.css";

// TODO filter
export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  onToggleTodoEdit,
}) => {
  return (
    <div className={styles.list}>
      {todos.map((props) => (
        <Todo
          {...props}
          key={props.id}
          onToggleTodo={onToggleTodo}
          onToggleTodoEdit={onToggleTodoEdit}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

// [{},{},{}] =====>>>>>> [<Todo/>, <Todo/>, <Todo/>]
