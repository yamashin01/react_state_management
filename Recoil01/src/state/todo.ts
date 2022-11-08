import { atom, selector } from "recoil";
import { Todo } from "src/types";

export const todosState = atom<Todo[]>({
    key: 'todosState', // unique ID (with respect to other atoms/selectors)
    default: [
        { id: 1, text: "foo", isDone: false },
        { id: 2, text: "bar", isDone: true },
      ], // default value (aka initial value)
  });

  export const TodosLengthState = selector({
    key: "todosLengthState",
    get: ({get}) => {
        const todos = get(todosState);
        return todos.length;
    }
});