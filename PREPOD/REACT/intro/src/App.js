import React, { useState } from "react";
import { v4 as setId } from "uuid";
import { Modal } from "./components/Modal";
import { TodoFilterButtons } from "./components/TodoFilterButtons";
import { TodoList } from "./components/TodoList";
import { TodoUserInput } from "./components/TodoUserInput";
import { Button } from "./components/Button";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onClick = () => {
    if (inputValue) {
      setTodos((prevTodosArr) => {
        return [
          ...prevTodosArr,
          { text: inputValue, done: false, id: setId(), isEdit: false },
        ];
      });
      setInputValue("");
    } else {
      setIsModalOpen(true);
    }
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
    setDeleteModalOpen(true);
    setSelectedTodoId(clickedTodoId);
  };

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter(({ id }) => id !== selectedTodoId));
    setDeleteModalOpen(false);
    setSelectedTodoId(null);
  };

  const onToggleTodoEdit = (clickedId, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            isEdit: !todo.isEdit,
            text: todo.isEdit ? newText : todo.text,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const onFilterChange = ({ target: { name } }) => {
    setCurrentFilter(name);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  // TODO: optimization
  const filteredTodos = todos.filter(
    (todo) =>
      (currentFilter === "done" && todo.done) ||
      (currentFilter === "undone" && !todo.done) ||
      currentFilter === "all"
  );

  return (
    <div>
      {isModalOpen && <Modal onClose={onModalClose}>Please fill in text</Modal>}
      {isDeleteModalOpen && (
        <Modal onClose={onDeleteModalClose}>
          <div>Are you sure ?</div>
          <Button onClick={deleteTodo}>Yes</Button>
          <Button onClick={onDeleteModalClose}>No</Button>
        </Modal>
      )}
      <TodoUserInput
        onInputTextChange={onInputChange}
        inputValue={inputValue}
        buttonOkClick={onClick}
      />
      <TodoFilterButtons
        currentFilter={currentFilter}
        onChange={onFilterChange}
      />
      <TodoList
        todos={filteredTodos}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodoEdit={onToggleTodoEdit}
      />
    </div>
  );
};

// .filter() [1,2,3,5,6,7,7]
