import React, { useEffect, useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return [todos, setTodos];
};

export default useTodos;
