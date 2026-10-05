import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex items-center justify-center gap-3 w-full"
    >
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full max-w-md bg-gray-800 text-white rounded-lg
                   border border-gray-700
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
                   outline-none py-3 px-4
                   transition duration-200"
      />

      <button
        type="submit"
        className="shrink-0 bg-indigo-500 hover:bg-indigo-600
                   text-white font-semibold
                   py-3 px-6 rounded-lg
                   transition duration-200"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;