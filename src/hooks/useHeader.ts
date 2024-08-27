import { TodoContext } from "@/context/TodoContext";
import { useContext, useState } from "react";

export const useHeader = () => {
    const [inputValue, setInputValue] = useState('');
    const { dispatch } = useContext(TodoContext);

    const handleNewTask = () => {
        if (!inputValue) {
            alert('Digite um título para a nova tarefa.');
            return;
        }

        dispatch({ type: 'ADD', payload: { title: inputValue, isDone: false}});
        setInputValue('');
    }

    return {
        handleNewTask,
        setInputValue,
        inputValue
    }
}