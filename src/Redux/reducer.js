const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_ITEM":
      const todosCreated = [...state.todos, action.payload];
      return {
        ...state,
        todos: todosCreated,
      };
    case "LOAD_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    case "DELETED_TODOS":
      const todosFilter = state.todos.filter((s) => s.id !== action.payload);
      return {
        ...state,
        todos: todosFilter,
      };
    default:
      return state;
  }
};

export default reducer;
