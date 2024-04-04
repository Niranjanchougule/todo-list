import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/todoSlice";

export default function AddTodoForm() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    dispatch(addTodo(description));
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you wanted Todo 🤔?</h3>
      <div>
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label=".form-control-lg example"
        ></input>
        <button class="btn btn-primary btn-lg">Add</button>
      </div>
    </form>
  );
}
