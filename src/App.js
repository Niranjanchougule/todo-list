import Logo from "./Logo";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Stats from "./Stats";
import { useDispatch, useSelector } from "react-redux";
import { clearTodos, deleteTodo, toggleTodo } from "./reducer/todoSlice";

export default function App() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  function handleDeleteItem(id) {
    dispatch(deleteTodo(id));
  }

  function handelToggleItem(id) {
    dispatch(toggleTodo(id));
  }

  function handelClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) {
      dispatch(clearTodos());
    }
  }

  return (
    <div className="app">
      <Logo />
      <AddTodoForm />
      <TodoList
        items={todos}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handelToggleItem}
        onClearList={handelClearList}
      />
      <Stats items={todos} />
    </div>
  );
}
