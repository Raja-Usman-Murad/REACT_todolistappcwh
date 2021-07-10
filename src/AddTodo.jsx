import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (!title || !desc) {
      alert("title or description can not be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <>
      <div className="container">
        <h2>ADD TODO LIST</h2>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              value={desc}
              type="text"
              className="form-control"
              id="desc"
            />
          </div>

          <button type="submit" className="btn btn-success btn-small">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
