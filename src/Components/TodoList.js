import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHttp } from "../useHttp";
import TodoListItem from "./TodoListItem";
import { loadTodo } from "../Redux/action";

function TodoList() {
  const { todos } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { request } = useHttp();

  useEffect(() => {
    request("http://localhost:3001/todo").then((data) => {
      dispatch(loadTodo(data));
    });
  }, []);

  console.log(todos);
  return (
    <div className="card p-3">
      <ul className="list-group">
        {todos.map((todo, id) => {
          return <TodoListItem key={id} {...todo} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
