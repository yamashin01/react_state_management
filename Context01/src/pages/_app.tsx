import type { AppProps } from "next/app";
import { createContext, useContext, useState } from "react";
import { Layout } from "src/components/Layout";
import { Todo } from "src/types";


const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const ThemeContext = createContext("light");
export const LangContext = createContext("ja");
export const TodoContext = createContext(TODOS);

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ja");
  
  return (
    <ThemeContext.Provider value={theme}>
      <LangContext.Provider value={lang}>
        <TodoContext.Provider value={todos}>
          <Layout>
            <button 
              onClick={() => {
                setTheme((prev) => prev === "dark" ? "light" : "dark");
                setLang((prev) => prev === "ja" ? "en" : "ja");
              }}
            >
              テーマ切り替え
            </button>
            <Component {...pageProps} todos={todos} setTodos={setTodos} />
          </Layout>
        </TodoContext.Provider>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}
