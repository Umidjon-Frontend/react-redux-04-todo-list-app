import React from "react";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useHttp } from "../useHttp";
import { deletedTodos } from "../Redux/action";

function TodoListItem({ id, todoName }) {
  const dispatch = useDispatch();

  const { request } = useHttp();

  function deleteTodo(id) {
    request(`http://localhost:3001/todo/${id}`, "DELETE")
      .then((data) => console.log(data + "DELETED"))
      .then(dispatch(deletedTodos(id)));
  }

  return (
    <li className="border-1 list-group-item m-2 d-flex justify-content-between align-items-center">
      <span>{todoName}</span>
      <div className="d-flex align-items-center">
        <span className="text-success mx-2">
          <BsPencilFill />
        </span>
        <span className="text-danger" onClick={() => deleteTodo(id)}>
          <BsFillTrashFill />
        </span>
      </div>
    </li>
  );
}

export default TodoListItem;
