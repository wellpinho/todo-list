import { Todo } from "@/@types/Todo";
import { TodoContext } from "@/context/TodoContext";
import { AES, enc } from "crypto-js";
import { useContext, useEffect, useState } from "react";

const SECRET_KEY = process.env.TODO_SECRET_KEY as string;
const LOCAL_STORAGE_KEY = 'STORAGE_DATA';

export const useSaveTodos = () => {
    const [getInitialData, setInitialData] = useState(false);

    // o dado é capturado pelo contexto sem o return ???
    const { state, dispatch } = useContext(TodoContext);

    const handleChangesTodo = () => {
        if (!getInitialData) {
            return;
        }

        // encrypt data
        const value = AES.encrypt(JSON.stringify(state), SECRET_KEY);

        // save to local storage the encrypted data
        localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
    } 

    // get initial todos from local storage
    useEffect(() => {
        try {
            const todoData = localStorage.getItem(LOCAL_STORAGE_KEY);

            if (todoData) {
                const bytes = AES.decrypt(todoData, SECRET_KEY);
                const decryptedTodos: Todo[] = JSON.parse(bytes.toString(enc.Utf8));

                dispatch({ type: 'ADD', payload: decryptedTodos });
            }
        } catch (error) {
            alert('Não foi possível obter as tarefas salvas');
        }

        setInitialData(true);
    }, [])

    // Monitoring all changes on todos
    useEffect(() => {
        handleChangesTodo();
    }, [state]);
}