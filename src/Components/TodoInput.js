import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addToItem } from "../Redux/action";
import { useHttp } from "../useHttp";

function TodoInput() {
  const [todoName, setTodo] = useState("");

  const dispatch = useDispatch();

  const { request } = useHttp();

  function handleAddItem(e) {
    e.preventDefault();
    const data = { id: v4(), todoName };

    request("http://localhost:3001/todo", "POST", JSON.stringify(data))
      .then((res) => console.log(res))
      .then(dispatch(addToItem(data)))
      .catch((e) => console.log(e));
    setTodo("");
  }
  return (
    <div className="card p-3">
      <form onSubmit={handleAddItem}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text text-white bg-primary">@</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Add A Todo Item"
            value={todoName}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100">Add Item</button>
      </form>
    </div>
  );
}

export default TodoInput;
