import React from "react";

function Form({ setTodos, setInputText, todos, inputText, edit, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();

    if (edit !== null) {
      const newTodo = { text: inputText, completed: false, id: edit };
      const index = todos.findIndex((todo) => todo.id === edit);

      todos.splice(index, 1, newTodo);
      setTodos([...todos]);
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
    }
    console.log(todos);

    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form action="">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
