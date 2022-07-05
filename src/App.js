import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3">
          <h1 className="text-center">Todo Input</h1>
        </div>
        <div className="col-md-10 mx-auto">
          <TodoInput />
        </div>
        <div className="col-md-12 mt-4 mb-4">
          <h1 className="text-center">Todo List</h1>
        </div>
        <div className="col-md-10 mx-auto">
          <TodoList />
        </div>
        <div className="col-md-10 mx-auto">
          <button className="btn btn-danger w-100 mt-3">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
