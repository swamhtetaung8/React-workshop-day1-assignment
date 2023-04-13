import React from "react";

const Form = ({ input, setInput, handleSubmit }) => {
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What do you want to do?"
        className="bg-black outline-none border border-blue-300 placeholder:text-sm p-3 rounded-md"
      />
      <button className="bg-blue-400 block px-4 rounded-md">Add</button>
    </form>
  );
};

export default Form;
