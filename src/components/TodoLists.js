import React from "react";
import Todo from "./Todo";

function TodoLists({
  todos,
  edit,
  setTodos,
  filteredTodos,
  setEdit,
  setInputText,
}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            edit={edit}
            setEdit={setEdit}
            setInputText={setInputText}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
