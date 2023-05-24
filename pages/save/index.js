import Head from "next/head";
import { useReducer, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [todos, settodos] = useState([]);
 
  const [newTodo, setnewTodo] = useState({
    todo: "",
    completed: false,
  });
 
  const fetchTodos = async () => {
    // fetchTodos
  };

  const saveTodo = async (e) => {
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });
 
    const data = await response.json();
    settodos(data);
  };
 
  const handleChange = (e) => {
    setnewTodo({
      todo: e.target.value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo();
    setnewTodo({
      todo: '',
    });
  };
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
 // Fetches the todo items when clicked
        <button onClick={fetchTodos}>Get todos</button>
 
 // Saves a new todo item when submitted
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={newTodo.todo} />
        </form>
        <ul>
          {}
        </ul>
      </main>
    </div>
  );
}