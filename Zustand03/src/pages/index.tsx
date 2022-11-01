import type { NextPage } from "next";
import { useEffect } from "react";
import { useStore } from "src/state";

const Home: NextPage = () => {
  const todos = useStore((state) => state.todos);
  const toggleIsDone = useStore((state) => state.toggleTodo);
  const fetchUsers = useStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h2>TODO一覧</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input 
              type="checkbox" 
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
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
