import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <>
      <div className="container mt-4 mb-2">
        <h2>Todo List</h2>
        {props.todos.length === 0 ? (
          <h5>NO TODOS TO DISPLAY</h5>
        ) : (
          props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default Todos;
