import { PlusCircle } from "@phosphor-icons/react/dist/ssr";

type Props = {
    onClick: () => void;
}
export const CustomButton = ({ onClick }: Props) => {
    return (
        <div>
            <button className="
                flex
                items-center
                cursor-pointer
                gap-2
                pt-3
                pr-4
                pb-3
                pl-4
                rounded
                outline
                border-transparent
                bg-blue-500
                text-gray-200
                font-bold
                text-sm
                transition-all
                hover:bg-purple-400
            " onClick={onClick}>
                Criar
                <PlusCircle size={32} />
            </button>
        </div>
    )
}