import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(storedTodos) console.log(storedTodos);
  // }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if(name === '') return
    setTodos(prevValue => {
      // run npm i uuid
      return [ ...prevValue, { id: Math.random(), name: name, complete: false }]
  })
    todoNameRef.current.value = null;
  }
  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <br />
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
