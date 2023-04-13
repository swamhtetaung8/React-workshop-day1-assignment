import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Search from "./components/Search";
import List from "./components/List";
import "./App.css";
import Cookies from "js-cookie";
const App = () => {
  const todoStorage = "todos";
  const getTodos = Cookies.get(todoStorage);
  const [todos, setTodos] = useState(getTodos ? JSON.parse(getTodos) : []);
  const [showTodo, setShowTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      name: input,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };
  useEffect(() => {
    setShowTodo(todos);
    Cookies.set(todoStorage, JSON.stringify(todos));
  }, [todos]);
  return (
    <main className=" bg-black min-h-screen text-gray-300">
      <div className="p-10 space-y-10">
        <h1 className="text-4xl font-bold text-blue-300">Todo List</h1>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between items-start">
          <Form handleSubmit={handleSubmit} input={input} setInput={setInput} />
          <Search setShowTodo={setShowTodo} todos={todos} />
        </div>
        <List showTodo={showTodo} todos={todos} setTodos={setTodos} />
      </div>
    </main>
  );
};

export default App;
