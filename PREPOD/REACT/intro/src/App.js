import React, { useState } from "react";
import { TodoUserInput } from "./components/TodoUserInput";
import { TodoList } from "./components/TodoList";
import { v4 as setId } from "uuid";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onClick = () => {
    setTodos((prevTodosArr) => {
      return [...prevTodosArr, { text: inputValue, done: false, id: setId(), isEdit: false, }];
    });
    setInputValue("");
  };

  const onTodoClick = (text) => {
    console.log("TODO WAS CLICKED!", text);
  };

  const onToggleTodo = (clickedId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === clickedId) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };

  const onDeleteTodo = (clickedTodoId) => {
    setTodos((prevTodos) => prevTodos.filter(({ id }) => id !== clickedTodoId));
  };

  return (
    <div>
      <TodoUserInput
        onInputTextChange={onInputChange}
        inputValue={inputValue}
        buttonOkClick={onClick}
      />
      <TodoList
        todos={todos}
        onTodoClick={onTodoClick}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </div>
  );
};

// .filter() [1,2,3,5,6,7,7]
