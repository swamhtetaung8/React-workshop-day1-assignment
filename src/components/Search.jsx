import React, { useState } from "react";

const Search = ({ todos, setShowTodo }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setShowTodo(
      todos.filter((todo) =>
        todo.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSearch("");
  };

  return (
    <form className="flex gap-2" onSubmit={handleSearch}>
      <input
        className=" bg-black border border-blue-300 p-3 outline-none rounded-md "
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className="border border-blue-300 text-blue-300 block px-4 rounded-md">
        Search
      </button>
    </form>
  );
};

export default Search;
