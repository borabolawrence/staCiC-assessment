'use client';

import { useEffect, useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const saveToLocalStorage = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
    setInput("");
  };

  const handleToggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setEditInput(todo.text);
  };

  const handleUpdateTodo = () => {
    if (editInput.trim() === "") return;

    const newTodos = todos.map((todo) =>
      todo.id === editingTodo.id ? { ...todo, text: editInput } : todo
    );
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
    setEditingTodo(null);
    setEditInput("");
  };

  const cancelEdit = () => {
    setEditingTodo(null);
    setEditInput("");
  };

  return (
    <div className="flex justify-center items-center p-2">
      <div className="w-full max-w-lg  p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">To-Do List</h1>

        <form onSubmit={handleAddTodo} className="flex space-x-4 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new to-do"
            disabled={editingTodo !== null}
          />
          {!editingTodo && (
            <button
              className="px-4 py-2 bg-blue-500/70 text-white rounded-md hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 duration-200"
              type="submit"
            >
              Add
            </button>
          )}
        </form>

        {todos.length === 0 ? (
          <div className="text-center text-gray-500 mt-4">
            <span className="text-xl text-gray-800">No to-do's yet! 😔</span>
          </div>
        ) : (
          <ul className="space-y-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-md shadow-sm gap-4"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                    disabled={editingTodo !== null}
                  />
                  {editingTodo?.id === todo.id ? (
                    <input
                      type="text"
                      value={editInput}
                      onChange={(e) => setEditInput(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onBlur={handleUpdateTodo}
                    />
                  ) : (
                    <span
                      className="text-gray-700 truncate"
                      style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        maxWidth: "200px",
                        display: "inline-block",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {todo.text}
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  {editingTodo?.id === todo.id ? (
                    <>
                      <button
                        onClick={cancelEdit}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleUpdateTodo}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Update
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-800/60 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEditTodo(todo)}
                        className="px-4 py-2 bg-yellow-300/40 text-gray-800 rounded-md hover:bg-yellow-800/60 hover:text-white duration-200 focus:ring-2 focus:ring-yellow-500"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
