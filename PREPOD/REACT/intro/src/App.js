import React, {useState} from "react";
import { v4 as setId } from "uuid";
import { Modal } from "./components/Modal";
import { TodoFilterButtons } from "./components/TodoFilterButtons";
import { TodoList } from "./components/TodoList";
import { TodoUserInput } from "./components/TodoUserInput";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onClick = () => {
    setTodos((prevTodosArr) => {
      return [
        ...prevTodosArr,
        { text: inputValue, done: false, id: setId(), isEdit: false },
      ];
    });
    setInputValue("");
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

  // TODO: optimization
  const filteredTodos = todos.filter(
    (todo) =>
      (currentFilter === "done" && todo.done) ||
      (currentFilter === "undone" && !todo.done) ||
      currentFilter === "all"
  );

  return (
    // TODO: open close modal
    <div>
      {isModalOpen && <Modal>
        Please fill in text
      </Modal>}
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
