import { FC } from "react";
import { useRecoilValue } from "recoil";
import { TodosLengthState } from "src/state/todo";

export const TodoCounter: FC = () => {
     const todosLength = useRecoilValue(TodosLengthState);
    return (
        <h2>TODO: {todosLength}件</h2>
    )
}
