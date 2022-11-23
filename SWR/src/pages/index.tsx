import type { NextPage } from "next";
import { Todo } from "src/types";
import useSWR from 'swr';

const fetcher = async(...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  const json = res.json();
  return json;
}

const Home: NextPage = () => {
  const { data, error } = useSWR<Todo[]>('https://jsonplaceholder.typicode.com/todos', fetcher);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <h2>TODO一覧</h2>
      {data.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input 
              type="checkbox" 
              defaultChecked={todo.completed}
              style={{ width: "1.5rem", height: "1.5rem" }}
              />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
