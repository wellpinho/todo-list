import { ChangeEvent } from "react";

type Props = {
    value: string;
    placeholder: string;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput = ({value, placeholder, type, onChange}: Props) => {
    return (
        <input 
            className="
                bg-[#5F6F65] 
                outline 
                border-transparent 
                rounded-l-md
                rounded-r-none
                text-[#C9DABF]
                transition-all 
                py-3
                placeholder-[#C9DABF]
                focus:bg-[#808D7C]
                pl-3
                pr-3
            "
            type={type} 
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    )
}