import React from "react";

function Todo({ text, todo, todos, setTodos, edit, setEdit, setInputText }) {
  const deleteHandler = () => {
    setTodos(todos.filter((i) => i.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const editHandler = (id) => {
    //editTodo(edit.id, id);
    const todo = todos.filter((todo) => todo.id === id)[0];
    setEdit(todo.id);
    setInputText(todo.text);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={() => editHandler(todo.id)} className="edit-btn">
        <i className="fa fa-eraser"></i>
      </button>
    </div>
  );
}

export default Todo;
