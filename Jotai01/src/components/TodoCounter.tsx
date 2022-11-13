import { FC } from "react";
import { todosLenthAtom } from "src/state/todo";
import { useAtom } from "jotai";

export const TodoCounter: FC = () => {
    const [todosLength] = useAtom(todosLenthAtom);
    return (
        <h2>TODO: {todosLength}件</h2>
    )
}