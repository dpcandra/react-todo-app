// css
import "./App.css";

// component
import Navbar from "./components/Navbar";
import AppTitle from "./components/AppTitle";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useState } from "react";


function App() {

  const [todo,setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
        <div className="top">
          <Navbar></Navbar>
          <AppTitle></AppTitle>
          <TodoList todolist={todoList}></TodoList>
        </div>

        <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form>
    </div>
  );
}

export default App;
