import React from "react";

const Todo = ({ id, name, isDone, setTodos, todos }) => {
  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const currTodo = todos.find((todo) => todo.id == id);
    const input = prompt("What do you want to change", currTodo.name);
    setTodos(
      todos.map((todo) => (todo.id == id ? { ...todo, name: input } : todo))
    );
  };

  return (
    <li className="flex justify-between items-center border border-green-300 p-5 rounded-md">
      <div>
        <input
          type="checkbox"
          id={`todo${id}`}
          className=" outline-none accent-green-300"
          checked={isDone}
          onChange={() => checkTodo(id)}
        />
        <label
          htmlFor={`todo${id}`}
          className={`ml-2 text-lg ${isDone && "line-through"}`}>
          {name}
        </label>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => editTodo(id)}
          className=" bg-blue-500 px-3 py-1 rounded-md">
          Edit
        </button>
        <button
          onClick={() => deleteTodo(id)}
          className=" bg-red-500 px-3 py-1 rounded-md">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
