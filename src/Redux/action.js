export const addToItem = (item) => {
  return {
    type: "ADD_TO_ITEM",
    payload: item,
  };
};
export const loadTodo = (todos) => {
  return {
    type: "LOAD_TODO",
    payload: todos,
  };
};
export const deletedTodos = (id) => {
  return {
    type: "DELETED_TODOS",
    payload: id,
  };
};
