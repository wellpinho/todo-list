import { TodoContext } from "@/context/TodoContext";
import { CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import { useContext, useState } from "react"
import { CustomInput } from "../input";
import { CustomButton } from "../button";
import { useHeader } from "@/hooks/useHeader";

export const CustomHeader = () => {
    const { handleNewTask, inputValue, setInputValue } = useHeader();


    return (
        <div className="mt-10">
            <div  className="flex gap-1 items-center justify-center">
                <CalendarCheck color="#5F6F65" className="md:text-6xl text-3xl" />
                <h2 className="md:text-6xl text-3xl text-[#5F6F65]">Lista de Tarefas</h2>
            </div>

            <div className="flex gap-1 mt-6 justify-center">
                <CustomInput 
                    value={inputValue}  
                    placeholder="Digite o nome da tarefa"
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <CustomButton onClick={handleNewTask} />
            </div>
        </div>
    )
}