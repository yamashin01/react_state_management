import Link from "next/link";
import { FC, useContext } from "react";
import { LangContext, ThemeContext, TodoContext } from "src/pages/_app";
import { TodoCounter } from "./TodoCounter";

export const Header:FC = () => {
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);
  console.log({theme, lang});
  return (
    <header>
      <nav>
        <Link href="/">
          <a>React状態管理</a>
        </Link>
        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a>TODO追加</a>
        </Link>
      </nav>

      <TodoCounter />
    </header>
  )
}