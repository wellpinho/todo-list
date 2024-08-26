import { ChangeEvent } from "react";

type Props = {
    value: string;
    placeholder: string;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput = ({value, placeholder, type, onChange}: Props) => {
    return (
        <div className="w-full">
            <input 
                className="
                    bg-gray-500 
                    outline 
                    border-transparent 
                    rounded 
                    text-gray-100 
                    transition-all 
                    py-3
                    placeholder-gray-300
                    focus:bg-purple-900
                "
                type={type} 
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
    )
}