import type { NextPage } from "next";
import { toggleTodoAtom } from "src/state/todo";
import { useAtom } from "jotai";

const Home: NextPage = () => {
  const [todos, toggleTodos] = useAtom(toggleTodoAtom);

  return (
    <div>
      <h2>TODO一覧</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input 
              type="checkbox" 
              checked={todo.isDone}
              onChange={() => toggleTodos({id: todo.id})}
              style={{ width: "1.5rem", height: "1.5rem" }}
              />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
