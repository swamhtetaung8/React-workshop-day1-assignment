import React from "react";
import Todo from "./Todo";

const List = ({ todos, setTodos, showTodo }) => {
  return (
    <div>
      <h1 className="text-green-300 font-medium text-xl mb-5">Your List</h1>
      {showTodo.length === 0 && (
        <p className="text-gray-500"> - Your list is empty, add some to see.</p>
      )}
      <ul className="space-y-5">
        {showTodo.map((todo) => (
          <Todo {...todo} key={todo.id} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
};

export default List;
