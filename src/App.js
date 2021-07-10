import React, { useState } from "react";
import Header from "./Header";
import Todos from "./Todos";
import Footer from "./Footer";
import AddTodo from "./AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const onDelete = (todo) => {
    console.log("i am deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("added", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };
  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
};

export default App;
