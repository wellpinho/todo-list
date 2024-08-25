import { Todo } from "./Todo";

export type TodoState = Todo[];

type TodoOptionalProps = {
    [key in keyof Todo]?: Todo[key]
};

type AddTodo = {
    type: 'ADD',
    payload: Todo | Todo[]
}

type ChangeTodo = {
    type: 'CHANGE',
    payload: TodoOptionalProps & { id: number }
}

type DeleteTodo = {
    type: 'DELETE',
    payload: { index: number },
};

export type TodoActions = AddTodo | ChangeTodo | DeleteTodo;