import { PlusCircle } from "@phosphor-icons/react/dist/ssr";

type Props = {
    onClick: () => void;
}
export const CustomButton = ({ onClick }: Props) => {
    return (
        <button className="
            flex
            items-center
            cursor-pointer
            gap-1
            pt-3
            pr-4
            pb-3
            pl-4
            rounded-l-none
            rounded-r-md
            outline
            border-transparent
            bg-[#5F6F65]
            text-[#C9DABF]
            text-sm
            transition-all
            hover:bg-[#808D7C]" 
            onClick={onClick}
        >
            Criar
            <PlusCircle size={20} />
        </button>
    )
}